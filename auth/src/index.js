// libs
import express from 'express';

// config
import {
  PORT,
  HOST,
  DB,
} from './config.js';

// functions
import { connectDb } from './helper/db.js';

const app = express();

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`AUTH: service started on port ${PORT}`);
    console.log(`AUTH: service host is ${HOST}`);
    console.log(`AUTH: db value is ${DB}`);
  });
}

app.get('/test', (req, res) => {
  res.send('Our AUTH server is working correctly');
});

app.get('/api/currentUser', (req, res) => {
  res.json({
    id: '1234',
    email: 'foo@gmail.com',
  });
});

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);
