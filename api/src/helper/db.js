import mongoose from 'mongoose';

// config
import { DB } from '../config.js';

export function connectDb () {
  mongoose.connect(DB, {
    useNewUrlParser: true,
  });

  return mongoose.connection;
};
