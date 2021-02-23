const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise

const PostModel = new Schema({
	title: { type: String },
	author: { type: String },
	desc: { type: String }
});

module.exports = mongoose.model('posts', PostModel)
