const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();

const DEFAULT_IMAGE_URL = process.env.DEFAULT_IMAGE_URL;

const bookSchema = new Schema({
    name: {
        type: String,
        required: [ true, 'Name is Required to create a book' ]
    },
    author: String,
    field: String,
    imageURL: {
        type: String,
        default: DEFAULT_IMAGE_URL
    },
    pageCount: Number,
    price: Number, 
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;
