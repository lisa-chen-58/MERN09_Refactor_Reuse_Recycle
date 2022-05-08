const Product = require("../models/product.model");

module.exports.getProductList = (req, res) => {
    Product.find()
        .then(allProducts => {
            res.json( allProducts )
        })
        .catch((err) => {
            res.json({ message: 'Check your getProductList', error: err })
        });
}

module.exports.getProductByID = (req,res) => {
    Product.findOne({_id: req.params.id})
        .then(oneProduct => {
            res.json( oneProduct )
        })
        .catch((err) => {
            res.json({message: 'Check your oneProduct', error: err}
            )
        })
}

module.exports.createNewProduct = (req,res) => {
    Product.create(req.body)
    .then(newlyCreatedProduct => {
        res.json( newlyCreatedProduct )
    })
    .catch(err => {
        res.json({message: 'Check your createNewProduct', error: err })
    });}

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body, { new: true, runValidators: true } 
        // new: true is an option that ensures we are returning a new product
        // runValidators: true these only work for post requests not put requests
    )
        .then(updatedProduct => {
            res.json({ updatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Check your updateExistingProduct', error: err })
        });}
    
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result })
        })
        .catch((err) => {
            res.json({ message: 'Check your deleteOne', error: err })
        });}