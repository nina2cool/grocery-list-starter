const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const itemSchema = new Schema({
    'text' : String,
    'quantity' : Number
});

module.exports = mongoose.model('item', itemSchema);
