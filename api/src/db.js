import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  name: String,
});

export const PostModel = mongoose.model('Post', postSchema);