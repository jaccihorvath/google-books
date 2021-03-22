const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  authors: {
    type: Array,
    required: true,
  },
  description: {
    type: String
  },
  image: {
    type: String,
    trim: true,
    unique: true
  },
  link: {
    type: String,
    trim: true,
    unique: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;