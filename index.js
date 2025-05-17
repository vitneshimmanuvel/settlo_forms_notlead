const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// First form endpoint
app.post('/api/form-submit', (req, res) => {
  const { fullName, phone, email, service, message } = req.body;
  console.log('Form Submitted from First Form:', { fullName, phone, email, service, message });
  res.json({ message: 'First form data received successfully!' });
});

// Second form endpoint
app.post('/api/academycourses', (req, res) => {
  const { fullName, phone } = req.body;
  console.log('Form Submitted from Second Form:', { fullName, phone });
  res.json({ message: 'Second form data received successfully!' });
});

// Health check
app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
