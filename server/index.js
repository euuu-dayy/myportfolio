const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
const multer = require("multer")
const path = require("path")

const app = express()

app.use(cors())
app.use(express.json())

// Serve uploaded files
app.use("/uploads", express.static("uploads"))

/* -------------------------
   MULTER CONFIGURATION
--------------------------*/

const storage = multer.diskStorage({

destination: function (req, file, cb) {
cb(null, "uploads/")
},

filename: function (req, file, cb) {
cb(null, "resume.pdf") // always save as resume.pdf
}

})

const upload = multer({ storage: storage })

/* -------------------------
   RESUME UPLOAD API
--------------------------*/

app.post("/upload", upload.single("resume"), (req, res) => {

res.json({
message: "Resume uploaded successfully"
})

})

/* -------------------------
   EMAIL API
--------------------------*/

app.post("/send-email", async (req, res) => {

const { name, email, message } = req.body

try {

const transporter = nodemailer.createTransport({

service: "gmail",

auth: {
user: "udaykaple2004@gmail.com",
pass: "cahx mtek oavy wwau"
}

})

await transporter.sendMail({

from: email,
to: "udaykaple2004@gmail.com",

subject: `Portfolio Contact from ${name}`,

text: `
Name: ${name}
Email: ${email}

Message:
${message}
`

})

res.json({ success: true })

}

catch (err) {

console.log(err)
res.status(500).json({ success: false })

}

})

app.listen(5000, () => {

console.log("Server running on port 5000")

})

app.get("/download-resume", (req, res) => {

const filePath = path.join(__dirname, "uploads", "resume.pdf")

res.download(filePath, "Uday_Kaple_Resume.pdf")

})