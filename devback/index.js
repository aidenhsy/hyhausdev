const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/message', (req, res) => {
  res.send('hello this is from backend.');
});

app.listen(4000, () => {
  console.log('listening on 4000');
});
