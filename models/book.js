const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Book = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    author:{
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Channel', Book);