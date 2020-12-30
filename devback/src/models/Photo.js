const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  title: String,
  images: String,
  author: String,
  authorImage: String,
  city: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;