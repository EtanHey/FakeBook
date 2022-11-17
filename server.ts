import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client / build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/public/index.html'));
});
mongoose
  .connect(`${MONGODB_URI}`)

  .then(() => {
    console.log('connected to Mongoose');
  })
  .catch((err) => {
    console.log('Failed to connect to Mongoose:');
    console.log(err.message);
  });

import userRoutes from './server/routes/userRoutes';
app.use('/api/users', userRoutes);

import postRoutes from './server/routes/postsRoutes';
import path from 'path';
app.use('/api/posts', postRoutes);

app.use(express.static('./client/build'));
app.use('/*', express.static('./client/build'));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
