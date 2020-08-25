const Book = require('../models/book');
const {bookValidation} = require('../utils/validation');

exports.getAllBooks = (req, res, next) => {
    Book.find({})
        .then(books => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(books);
        }, (err) => {next(err)})
        .catch((err) => {next(err)});
};

exports.addBook = (req, res, next) => {
    const {error} = bookValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    Book.create(req.body)
        .then((book) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(book);
        }, (err) => {next(err)}).catch((err) => {next(err)});

};

exports.getBookById = (req, res, next) => {
    Book.findById(req.params.bookId)
        .then((book) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(book);
        }, (err) => next(err))
        .catch((err) => next(err));
};

exports.updateBook = (req, res, next) => {
    Book.findByIdAndUpdate(req.params.bookId, {
        $set: req.body
    }, { new: true })
        .then((book) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(book);
        }, (err) => next(err))
        .catch((err) => next(err));
};

exports.deleteBook = (req, res, next) => {
    Book.findByIdAndRemove(req.params.bookId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
};

