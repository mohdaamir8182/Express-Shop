const express = require('express');

const app = express();

app.use('/add-product' , (req, res, next) => {
    console.log("In the add product");
    res.send('<html><head><title>Add Product</title></head><body><h1>Add new Product</h1></body></html>');
});

app.use('/', (req, res, next) => {
    console.log("In the root!");
    res.send('<html><head><title>Root directory</title></head><body><h1>In the root directory.</h1></body></html>');
});

app.listen(3000);