import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
s
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    }
});


  

  
export default transporter;