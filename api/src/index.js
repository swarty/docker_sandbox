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
import { PostModel } from './db.js';

const app = express();

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`API: service started on port ${PORT}`);
    console.log(`API: service host is ${HOST}`);
    console.log(`API: db value is ${DB}`);
  });

  PostModel.find((error, postList) => {
    if(error) {
      return console.error(error);
    }
    console.log('DB: postList', postList);
  });

  const silence = new PostModel({ name: 'Silence' });
  silence.save((error, saved) => {
    if(error) {
      return console.error(error);
    }
    console.log('DB: saved', saved);
  });
  console.log('DB: post created', silence);
}

app.get('/test', (req, res) => {
  res.send('Our api server is working correctly');
});

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);
