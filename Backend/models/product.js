const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoosastic= require('mongoosastic');

let ProductSchema = new Schema({
    sku: {type: String},
    name: {type: String},
    description: {type: String},        
    price: {type: Number}
});
ProductSchema.plugin(mongoosastic, {
    hosts:['localhost:9200']
  })
  
module.exports = mongoose.model('Product', ProductSchema);