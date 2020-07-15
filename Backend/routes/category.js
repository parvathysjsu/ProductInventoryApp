var express = require('express');
var router = express.Router();
var categoryModule= require('./../infrastructure/category')

router.get('/api/categories', categoryModule.getCategories);
router.post('/api/categories', categoryModule.createCategory);
router.post('/api/categories/load', categoryModule.loadSampleCategories);
module.exports = router;