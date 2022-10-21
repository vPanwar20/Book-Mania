const Book = require('../database/model');

const addBook = (req, res) => {
  const { name, pageCount, author, field, price } = req.body;
  let obj = { name, pageCount, author, price, field };

  Book.findOneAndDelete(obj);

  const NewBook = new Book(obj);

  NewBook.save((err) => {
    if (err) {
      res.status(500).send({
        response: 'Internal Server Error',
        message: err.message
      });
    } else {
      res.status(200).send({
        response: 'Success.',
        message: 'Book Saved Successfully',
      });
    }
  });
}

module.exports = addBook;