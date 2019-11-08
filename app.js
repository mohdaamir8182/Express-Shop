const express = require('express');

const app = express();

app.use((req , res , next)=>{
    console.log("In the middleware!");
    next();
});

app.use((req, res, next) => {
    console.log("In the nextttt middleware!")
});

app.listen(3000);