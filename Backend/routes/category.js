var express = require('express');
var router = express.Router();
var categoryModule= require('./../infrastructure/category')
var Category = require('./../models/category')
Category.createMapping(function (err, mapping) {
    if (err)
        console.log('-------------err in mapping: ', err);
    else {
        console.log('Category mapping created: ', mapping);
    }
});
router.get('/api/categories', categoryModule.getCategories);
router.post('/api/categories', categoryModule.createCategory);
router.post('/api/categories/load', categoryModule.loadSampleCategories);
router.get('/api/categories/search/:text', categoryModule.search);
router.get('/api/categories/load/search', function (req, res) {
    var stream = Category.synchronize();
    var count = 0;
    stream.on('data', function () {
        count++;
        console.log("stream on data: Categorycount: " + count);
    })
    stream.on('close', function () {
        console.log('stream on close indexed Category count: ', count);
    })
    stream.on('error', function (error) {
        console.log('stream error: ', error);
    })
    res.send("Sync'ing data")
});
module.exports = router;