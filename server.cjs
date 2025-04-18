const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'No message provided' });

  return res.json({ reply: `Frikkie says: Lekker question, boet – "${message}"` });
});

app.listen(PORT, () => {
  console.log(`Frikkie backend running on port ${PORT}`);
});
