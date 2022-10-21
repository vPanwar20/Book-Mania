const express = require('express');
const mongoose = require('mongoose');
const Book = require('./database/model');
const router = express.Router();
require('dotenv').config();

const URI = process.env.DATABASE_URI;
const addBook = require('./middleware/addBook');
const readAllBooks = require('./middleware/readAllBooks');
const readBook = require('./middleware/readBook');
const removeBook = require('./middleware/removeBook');
const updateBook = require('./middleware/updateBook');

mongoose.Promise = global.Promise;
mongoose.connect(URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

router.get('/', (req, res) => {
    res.status(200).send({
        response: 'Server is successfully running ....',
        message: 'Please authenticate yourself to use this service.'
    });
});

router.get('/read_books', readAllBooks);

router.get('/read_book/:id', readBook);

router.post('/add_book', addBook);

router.put('/update_book/:id', updateBook);

router.delete('/delete_book/:id', removeBook);

module.exports = router;
