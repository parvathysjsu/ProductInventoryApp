var express = require('express');
var router = express.Router();
var productModule= require('./../infrastructure/product')

router.get('/api/products', productModule.getProducts);
router.post('/api/products',  productModule.createProduct);
router.post('/api/products/load', productModule.loadSampleProducts);

module.exports = router;