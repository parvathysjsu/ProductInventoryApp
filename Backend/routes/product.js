var express = require('express');
var router = express.Router();
var productModule = require('./../infrastructure/product')
var Product = require('./../models/product')
Product.createMapping(function (err, mapping) {
    if (err)
        console.log('-------------err in mapping: ', err);
    else {
        console.log('mapping created: ', mapping);
    }
});

router.get('/api/products', productModule.getProducts);
router.post('/api/products', productModule.createProduct);
router.post('/api/products/load', productModule.loadSampleProducts);
router.get('/api/products/search/:text', productModule.search);
router.get('/api/products/load/search', function (req, res) {
    var stream = Product.synchronize();
    var count = 0;
    stream.on('data', function () {
        count++;
        console.log("stream on data: count: " + count);
    })
    stream.on('close', function () {
        console.log('stream on close indexed count: ', count);
    })
    stream.on('error', function (error) {
        console.log('stream error: ', error);
    })
    res.send("Sync'ing data")
});
module.exports = router;