const Book = require("../database/model");

const updateBook = (req, res) => {
  Book.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, book) => {
    if(err) {
      res.status(500).send({
        response: "Updation Failed",
        message: err.message
      });
    } else {
      console.log(book);
      res.status(200).send(book);
    }
  });
}

module.exports = updateBook;
