const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path');

app.set('view engine' , 'ejs');
app.set('views' , 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));


app.use('/admin' , adminRouter);
app.use(shopRouter);

app.use((req, res) => {
    //res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    res.status(400).render('404' , {msg: 'Not Found',path:'/404'});
});


app.listen(3000);
