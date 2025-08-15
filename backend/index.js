require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const nodemailer = require('nodemailer')

const app = express()
app.use(cors())
app.use(express.json())

// API routes first
app.get('/api/health', (req, res) => {
  res.send({ status: 'ok' })
})

// Handle contact form submission
app.post('/api/contact/send-email', async (req, res) => {
    console.log('Contact form submission received:', req.body);
    
    const { returnEmail, subject, messageBody } = req.body;

    // Basic validation
    if (!returnEmail || !subject || !messageBody) {
        console.log('Validation failed: Missing required fields');
        return res.status(400).json({ 
            success: false, 
            message: 'All fields are required.' 
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(returnEmail)) {
        console.log('Validation failed: Invalid email format');
        return res.status(400).json({ 
            success: false, 
            message: 'Please provide a valid email address.' 
        });
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Missing email environment variables');
        return res.status(500).json({ 
            success: false, 
            message: 'Server configuration error. Please try again later.' 
        });
    }

    try {
        // Setup Nodemailer transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Test the connection
        console.log('Testing email connection...');
        await transporter.verify();
        console.log('Email connection verified successfully');

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER, // Use your own email as sender
            replyTo: returnEmail, // Set reply-to as the contact form submitter
            to: process.env.EMAIL_USER, // Send to yourself
            subject: `PORTFOLIO CONTACT: ${subject}`,
            text: `
From: ${returnEmail}

Subject: ${subject}

Message:
${messageBody}`,
            html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #333;">New Portfolio Contact</h2>
    <p><strong>From:</strong> ${returnEmail}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <div style="margin-top: 20px;">
        <strong>Message:</strong>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${messageBody.replace(/\n/g, '<br>')}
        </div>
    </div>
</div>`,
        };

        console.log('Sending email...');
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        
        res.status(200).json({ 
            success: true, 
            message: 'Email sent successfully!' 
        });
    } catch (error) {
        console.error('Error sending email:', error);
        
        // More specific error messages
        let errorMessage = 'Failed to send email. Please try again later.';
        
        if (error.code === 'EAUTH') {
            errorMessage = 'Email authentication failed. Please check server configuration.';
            console.error('Authentication error - check EMAIL_USER and EMAIL_PASS');
        } else if (error.code === 'ENOTFOUND') {
            errorMessage = 'Network error. Please check your internet connection.';
        } else if (error.code === 'ECONNECTION') {
            errorMessage = 'Cannot connect to email server. Please try again later.';
        }
        
        res.status(500).json({ 
            success: false, 
            message: errorMessage 
        });
    }
});

// Debug: Check if public directory exists
const publicPath = path.join(__dirname, 'public')
console.log('Public directory path:', publicPath)
console.log('Public directory exists:', fs.existsSync(publicPath))

if (fs.existsSync(publicPath)) {
  console.log('Files in public directory:', fs.readdirSync(publicPath))
  
  // Serve static files only if directory exists
  app.use(express.static(publicPath))
  
  // Serve React app for non-API routes
  app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'public', 'index.html')
    console.log('Serving index.html from:', indexPath)
    res.sendFile(indexPath)
  })
} else {
  console.log('Public directory not found - frontend not built')
  
  // Fallback for missing frontend
  app.get('/', (req, res) => {
    res.status(404).send('Frontend build not found. Run build process first.')
  })
}

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})