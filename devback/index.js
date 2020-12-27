const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const asyncHandler = require('express-async-handler');
const dotenv = require('dotenv');
const Photo = require('./models/Photo');

const app = express();

dotenv.config();
connectDB();

app.use(cors());

app.get('/api/message', (req, res) => {
  res.send('hello this is from backend.');
});
app.get(
  '/api/photos',
  asyncHandler(async (req, res) => {
    const photos = await Photo.find();
    res.json(photos);
  })
);

app.listen(4000, () => {
  console.log('listening on 4000');
});
