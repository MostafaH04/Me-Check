// server/index.js
const path = require('path');
const express = require('express');
const cors = require('cors');
const PORT = 3001;
const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const cohere = require('cohere-ai');
cohere.init(`API KEY`);

app.get('/api', async (req, res) => {
  const response = await cohere.classify({
    model: '40a3ac2d-d2ac-4988-9a7e-eb8d2562961f-ft',
    inputs: [`${req.query.prompt}`]
  });
  console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`);
  res.json(response.body);
})

