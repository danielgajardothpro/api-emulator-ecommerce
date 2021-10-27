'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ecomerce_kk')
.then(() => {
    console.log("DB Connection OK");

    
    app.listen(port, () => {
        console.log("Server running in: localhost:3700");
    });

})
.catch(err => console.log(err));