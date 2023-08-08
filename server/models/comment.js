const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    name: String,
    email: String,
    message: String,

});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment