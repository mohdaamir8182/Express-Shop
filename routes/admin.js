const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<html><head><title>Add Product</title></head><body><h1>Add new Product</h1><br><br><form action="/product" method="POST"><input tupe="text" name="title" /><button type="submit">Add Product</button></form></body></html>');
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;