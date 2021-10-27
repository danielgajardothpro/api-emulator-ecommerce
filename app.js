"use strict";

var express = require("express");


var app = express();

//routes
var project_routes = require("./routes/ecomerce");

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




//api use in routes
app.use("/api", project_routes);

//export
module.exports = app;
