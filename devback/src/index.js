import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import connectDB from './config/db.js';
import photoRoutes from './routes/photoRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

dotenv.config();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/message', (req, res) => {
  res.send('hello this is from backend.');
});

app.use('/api/photos', photoRoutes);
app.use('/api/users', userRoutes);

app.listen(4000, () => {
  console.log('listening on 4000');
});
