const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// ✉️ Gmail + App Password (Do not share these publicly)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vitneshsettlo@gmail.com',
    pass: 'xpegdafbdkjsdrxb' // Note: app password with NO spaces
  }
});

// ✅ First Form: Free Quote
app.post('/api/form-submit', (req, res) => {
  const { fullName, phone, email, service, message } = req.body;

  console.log('Form Submitted from First Form:', { fullName, phone, email, service, message });

  const mailOptions = {
    from: 'vitneshsettlo@gmail.com',
    to: 'vitneshsettlo@gmail.com',
    subject: 'Free Consultation - Quote Request',
    text: `🟢 Free Consultation\n\nGet A Free Quote​ form:\n\n${fullName} (${phone}, ${email}) is trying to get a free quote.\n\nService: ${service}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Email failed:', error);
      return res.status(500).json({ message: 'Form submitted, but email failed.' });
    }
    console.log('✅ Email sent:', info.response);
    res.json({ message: 'Free Quote​ data received and email sent successfully!' });
  });
});

// ✅ Second Form: Course Info
app.post('/api/academycourses', (req, res) => {
  const { fullName, phone } = req.body;

  console.log('Form Submitted from Second Form:', { fullName, phone });

  const mailOptions = {
    from: 'vitneshsettlo@gmail.com',
    to: 'vitneshsettlo@gmail.com',
    subject: 'Course Details Request',
    text: `🟠 Course Info:\n\n${fullName} (${phone}) is trying to get info about a course.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Email failed:', error);
      return res.status(500).json({ message: 'Form submitted, but email failed.' });
    }
    console.log('✅ Email sent:', info.response);
    res.json({ message: 'Course page data received and email sent successfully!' });
  });
});

// ✅ Third Form: Contact Form
app.post('/api/customform3', (req, res) => {
  const { name, phone, email, role, answers } = req.body;
  const userMessage = answers?.message || '';

  console.log('Form Submitted from Contact:', {
    name,
    phone,
    email,
    role,
    message: userMessage
  });

  const mailOptions = {
    from: 'vitneshsettlo@gmail.com',
    to: 'vitneshsettlo@gmail.com',
    subject: 'Contact Form Submission',
    text: `🔵 Contact Form:\n\n${name} (${phone}, ${email}) with the role of ${role} is trying to contact us.\n\nMessage: ${userMessage}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Email failed:', error);
      return res.status(500).json({ message: 'Form submitted, but email failed.' });
    }
    console.log('✅ Email sent:', info.response);
    res.json({ message: 'Contact form data received and email sent successfully!' });
  });
});





// ✅ Fourth Form: Course Enrollment
app.post('/api/course-enrollment', (req, res) => {
  const { name, phone, email, courseName } = req.body;
  
  console.log('Course Enrollment Submitted:', { name, phone, email, courseName });
  
  const mailOptions = {
    from: 'vitneshsettlo@gmail.com',
    to: 'vitneshsettlo@gmail.com',
    subject: `Enrollment Request: ${courseName}`,
    text: `📝 Course Enrollment\n\n${name} (${phone}, ${email}) is trying to enroll in the ${courseName} course.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Email failed:', error);
      return res.status(500).json({ message: 'Form submitted, but email failed.' });
    }
    console.log('✅ Email sent:', info.response);
    res.json({ message: 'Enrollment data received and email sent successfully!' });
  });
});

// ✅ Health Check
app.get('/', (req, res) => {
  res.send('✅ Backend is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
