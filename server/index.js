require("dotenv").config()

const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
const multer = require("multer")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use("/uploads", express.static("uploads"))

/* -------------------------
   MULTER CONFIG
--------------------------*/

const storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, "uploads/")
},
filename: function (req, file, cb) {
cb(null, "resume.pdf")
}
})

const upload = multer({ storage })

/* -------------------------
   RESUME UPLOAD
--------------------------*/

app.post("/upload", upload.single("resume"), (req, res) => {
res.json({ message: "Resume uploaded successfully" })
})

/* -------------------------
   EMAIL API
--------------------------*/

app.post("/send-email", async (req, res) => {

const { name, email, message } = req.body

try {

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
throw new Error("Email environment variables missing")
}

const transporter = nodemailer.createTransport({
host: "smtp.gmail.com",
port: 465,
secure: true,
auth:{
user: process.env.EMAIL_USER,
pass: process.env.EMAIL_PASS,
}
})

await transporter.sendMail({
from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
replyTo: email,
to: process.env.EMAIL_USER,
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

console.error("EMAIL ERROR:", err)
res.status(500).json({ success: false, error: err.message })

}

})

/* -------------------------
   DOWNLOAD RESUME
--------------------------*/

app.get("/download-resume", (req, res) => {
const filePath = path.join(__dirname, "uploads", "resume.pdf")
res.download(filePath, "Uday_Kaple_Resume.pdf")
})

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})