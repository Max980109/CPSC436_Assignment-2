const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MessageSchema = new Schema({
    message: {type: String, required: true},
    messageTime: {type: Date, required: true},
});

// Export the model
module.exports = mongoose.model('Message','MessageSchema');