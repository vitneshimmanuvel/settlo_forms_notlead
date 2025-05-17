const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/form-submit', (req, res) => {
  const { fullName, phone, email, service, message } = req.body;

  console.log('Form Submitted:', { fullName, phone, email, service, message });

  res.json({ message: 'Form data received successfully!' });
});

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
