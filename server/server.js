const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const upload = multer({ dest: 'uploads/' }); // 파일이 저장될 경로 설정
const app = express();
app.use(bodyParser.json());
app.use(cors()); // CORS 설정

app.post('/send-email', upload.single('file'), async (req, res) => {
    const { name, email, message } = req.body;
    const file = req.file; // 업로드된 파일 정보
  
    const mailOptions = {
      from: email,
      to: 'your-email@gmail.com',
      subject: `Message from ${name}`,
      text: message,
      attachments: [
        {
          filename: file.originalname,  // 업로드된 파일의 원래 이름
          path: file.path  // 업로드된 파일의 경로
        }
      ]
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully with attachment!');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email with attachment');
    }
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
