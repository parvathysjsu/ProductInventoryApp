const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoosastic= require('mongoosastic');

let CategorySchema = new Schema({   
    name: {type: String},
    description: {type: String}
});
CategorySchema.plugin(mongoosastic, {
    hosts:['localhost:9200']
  })
  
module.exports = mongoose.model('Category', CategorySchema);