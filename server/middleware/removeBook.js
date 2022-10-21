const Book = require('../database/model');

const removeBook = (req, res) => {
  Book.findByIdAndDelete(req.params.id, (err) => {
    if(!err) {
      res.status(200).send({
        response: 'Deleted Successfully'
      });
    } else {
      res.status(500).send({
        response: 'Deletion failed',
        message: err.message
      });
    }
  });
}

module.exports = removeBook;
