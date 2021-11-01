// libs
import express from 'express';
import axios from 'axios';

// config
import {
  PORT,
  HOST,
  DB,
  AUTH_API_URL,
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
  res.send('Our api server is working correctly ');
});


app.get('/testWithCurrentUser', (req, res) => {
  // AUTH_API_URL
  console.log('test');

  axios
    .get(AUTH_API_URL + '/currentUser')
    .then(({ data }) => {
      res.json({
        restWithCurrentUser: true,
        currentUserFromAuth: data,
      });
    });
});

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);
