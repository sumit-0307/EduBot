// backend/index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBYK9vdrCqlGFXMK2T6IaYglGgdwqgCCYI';

app.post('/api/generate', async (req, res) => {
  try {
    const response = await axios.post(GEMINI_API_URL, {
      contents: [{ parts: [{ text: req.body.message }] }]
    });
    const reply = response.data.candidates[0].content.parts[0].text;
    res.json({ reply });
  } catch (error) {
    res.status(500).json({ reply: 'Error communicating with Gemini API.' });
  }
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
