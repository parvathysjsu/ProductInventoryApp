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

router.get('/api/search/:text', function (req, res) {

    let searchText = req.params.text;
    console.log('searchText: ', searchText);
    var collection = ['products', 'categorys'];
    var types = ['_doc'];
    Product.search({
        query_string:
            { query: searchText }
    },
        { index: collection, type: types },
        function (err, results) {
            if (err) {
                res.send(err);
            }
            else {
            let resp= {};
            resp.count=results.hits.total;
            resp.hits=[];
            results.hits.hits.map(rec=> 
                resp.hits.push({
                    "type":rec._index,
                    "id":rec._id,
                    "data":rec._source
                })
                )
            res.send( resp);
        }
        })
})

module.exports = router;