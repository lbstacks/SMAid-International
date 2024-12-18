const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors()); 

//contact form endpoint
app.post("/send-email", async (req, res) => {
  const { fullName, email, phone, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.elasticemail.com",
      port: 2525, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: subject,
      html: `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});



//newsletter subscription endpoint
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
  
    const transporter = nodemailer.createTransport({
      host: "smtp.elasticemail.com",
      port: 2525,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Newsletter Subscription Confirmation",
      html: `
        <h2>Thank You for Subscribing!</h2>
        <p>You have successfully subscribed to our newsletter.</p>
        <p>Stay tuned for updates and exciting news.</p>
        <br>
        <p>Best Regards,<br>SMaid International</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Subscription successful!" });
  } catch (error) {
    console.error("Error sending subscription email:", error);
    res.status(500).json({ error: "Failed to process subscription." });
  }
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
