const Book = require('../database/model');

const readBook = (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) {
      res.status(500).send({
        response: "No Book Found",
        message: err.message
      });
    } else {
      res.status(200).send(book);
    }
  });
}

module.exports = readBook;
