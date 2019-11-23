const Product= require('../models/product');

exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(rootDir , 'views','add-product.html'));
    res.render('add-product', { path: '/admin/add-product', pageTitle: 'Add Product' });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getAllProducts = (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = Product.fetchAll();
    res.render('shop', { path: '/', pageTitle: 'Shop Here', prods: products });
};