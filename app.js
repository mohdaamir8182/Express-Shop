const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product' , (req, res, next) => {
    res.send('<html><head><title>Add Product</title></head><body><h1>Add new Product</h1><br><br><form action="/product" method="POST"><input tupe="text" name="title" /><button type="submit">Add Product</button></form></body></html>');
});

app.use('/product', (req , res , next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<html><head><title>Root directory</title></head><body><h1>In the root directory.</h1></body></html>');
});

app.listen(3000);