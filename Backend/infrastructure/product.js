const Product = require('./../models/product');

exports.createProduct = function (req, res) {
    let product = new Product(
        req.body
    );
    product.save(function (err) {
        if (err) {
            console.log("==============error========");
            res.send(err);
        }
        res.send('Product Created successfully')
    })
};

exports.getProducts = function (req, res) {
    Product.find(function (err, results) {
        if (err) return next(err);
        res.send(results);
    });
};
exports.search = function (req, res) {
    let searchText=req.params.text;
    console.log('searchText: ', searchText);
    Product.search({
        query_string:{query:searchText}
    },
    function(err, results){
        if(err) return res.send(err);
        console.log(results);
        console.log('results: ', results.hits.hits);
        //return results;
        res.send(results);
    })
}
exports.loadSampleProducts = function (req, res){
    let i = 0;
    let promises = [];
    while (i < 100) {
        i++;
        let product = new Product(
            {
                "sku":"PROD00"+i,
                "name": "Product " + i,
                "description": "Product description " + i,
                "price":i
            }
        );
        promises.push(product.save())
    }
    return Promise.all(promises)
        .then(result => {
            res.send(result);
        })
        .catch((error) => {
            console.log("Error in adding sample data");
            return  res.send(error);
        });
};