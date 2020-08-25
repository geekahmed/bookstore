const User = require('../models/user');
const {loginValidation, registerValidation} = require('../utils/validation');
const auth = require('../middleware/auth');

exports.getAllUsers = (req, res, next) => {
    User.find({})
        .then((users) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(users);
        }, (err) => next(err))
        .catch((err) => next(err));
};

exports.addUser = (req, res, next) => {

};

exports.loginUser = (req, res, next) => {
    let token = auth.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'Login Successful!'});
};