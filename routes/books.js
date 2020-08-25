const express = require('express');
const bodyParser = require('body-parser');
const auth = require('../middleware/auth');
const bookController = require('../controllers/books');

const bookRouter = express.Router();
bookRouter.use(bodyParser.json());


bookRouter.route('/')
    .get( bookController.getAllBooks)
    .post(auth.verifyUser, auth.verifyAdmin,bookController.addBook)
    .delete(auth.verifyUser, auth.verifyAdmin,(req, res, next) => {
        res.statusCode = 403;
        res.end('DELETE operation not supported on /books');
    })
    .put(auth.verifyUser, auth.verifyAdmin,(req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /books');
    });

bookRouter.route('/:bookId')
    .get(bookController.getBookById)
    .post(auth.verifyUser, auth.verifyAdmin,(req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /books/' + req.params.bookId);
    })
    .delete(auth.verifyUser, auth.verifyAdmin,bookController.deleteBook)
    .put(auth.verifyUser, auth.verifyAdmin,bookController.updateBook);



module.exports = bookRouter;
