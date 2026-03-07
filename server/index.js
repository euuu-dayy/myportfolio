require("dotenv").config()

const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
const multer = require("multer")
const path = require("path")
const fs = require("fs")

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// serve uploads folder
app.use("/uploads", express.static("uploads"))

/* -------------------------
   MULTER CONFIG
--------------------------*/

const storage = multer.diskStorage({

destination: function (req, file, cb) {
  cb(null, "uploads/")
},

filename: function (req, file, cb) {
  const filename = Date.now() + "-resume.pdf"
  cb(null, filename)
}

})

const upload = multer({ storage })

/* -------------------------
   FIND LATEST RESUME
--------------------------*/

function getLatestResume() {

const dir = path.join(__dirname, "uploads")

if (!fs.existsSync(dir)) return null

const files = fs.readdirSync(dir)

if (files.length === 0) return null

files.sort((a, b) => {

return fs.statSync(path.join(dir, b)).mtime.getTime() -
       fs.statSync(path.join(dir, a)).mtime.getTime()

})

return files[0]

}

/* -------------------------
   RESUME UPLOAD
--------------------------*/

app.post("/upload", upload.single("resume"), (req, res) => {

res.json({
message: "Resume uploaded successfully",
file: req.file.filename
})

})

/* -------------------------
   VIEW RESUME
--------------------------*/

app.get("/view-resume", (req, res) => {

const latestResume = getLatestResume()

if (!latestResume) {
return res.status(404).json({ message: "No resume uploaded" })
}

const filePath = path.join(__dirname, "uploads", latestResume)

// prevent caching
res.setHeader("Cache-Control", "no-store")
res.setHeader("Pragma", "no-cache")
res.setHeader("Expires", "0")
res.setHeader("Content-Type", "application/pdf")

res.sendFile(filePath)

})

/* -------------------------
   DOWNLOAD RESUME
--------------------------*/

app.get("/download-resume", (req, res) => {

const latestResume = getLatestResume()

if (!latestResume) {
return res.status(404).json({ message: "No resume uploaded" })
}

const filePath = path.join(__dirname, "uploads", latestResume)

res.setHeader("Cache-Control", "no-store")

res.download(filePath, "Uday_Kaple_Resume.pdf")

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
auth: {
user: process.env.EMAIL_USER,
pass: process.env.EMAIL_PASS
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
   START SERVER
--------------------------*/

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})