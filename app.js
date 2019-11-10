const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin' , adminRouter);
app.use('/shop' , shopRouter);

app.use((req , res) => {
    res.send('<h1>404 - Page not found</h1>');
});



app.listen(3000);