const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.post('/predict', (req, res) => {
  const input = req.body.input || req.body.message || '';
  // Simple mock behavior: echo with small transformation
  const reply = `Hermes-Mock: Ich habe deine Anfrage erhalten und echo: ${input}`;
  res.json({ reply });
});

app.listen(port, () => {
  console.log(`Hermes mock server listening on http://localhost:${port}`);
});
