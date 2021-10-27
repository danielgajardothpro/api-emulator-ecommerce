"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = Schema({
  name: String,
  price: Number,
  sponsor: String,
  category: [String]
});

module.exports = mongoose.model("Product", ProductSchema);