const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const article = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, required: true },
  createDate: { type: Date, default: Date.now },
});

const Article = mongoose.model('Article', article);

module.exports = Article;
