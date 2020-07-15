const Category = require('./../models/category');

exports.createCategory = function (req, res) {
    let category = new Category(
        req.body
    );
    category.save(function (err) {
        if (err) {
            console.log("==============error========");
            res.send(err);
        }
        res.send('Category Created successfully')
    })
};

exports.getCategories = function (req, res) {
    Category.find(function (err, results) {
        if (err) return next(err);
        res.send(results);
    });
};

exports.loadSampleCategories = function (req, res) {
    let i = 0;
    let promises = [];
    while (i < 10) {
        i++;
        let category = new Category(
            {
                "name": "Category 00" + i,
                "description": "description 00" + i
            }
        );
        promises.push(category.save())
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