const Book = require('../database/model');

const readAllBooks = (req, res) => {
  Book.find({}, (err, books) => {
    if (err) {
      res.status(500).send({
        response: "Unexpected error",
        message: err.message
      });
    } else {
      res.status(200).send(books);
    }
  });
}

module.exports = readAllBooks;
