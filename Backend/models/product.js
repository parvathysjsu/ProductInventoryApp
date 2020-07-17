const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    sku: {type: String},
    name: {type: String},
    description: {type: String},        
    price: {type: Number}
});

module.exports = mongoose.model('Product', ProductSchema);