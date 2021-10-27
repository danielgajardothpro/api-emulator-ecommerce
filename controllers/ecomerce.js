"use strict";
var Product = require("../models/ecomerce");
var fs = require("fs");

var controller = {

      test: function(req,res){
        return res.status(200).send({
            message: "test api kk"
        })
      },
       
      getProduct: function (req, res) {
        var productId = req.params.id;
        if (productId == null) {
          return res.status(404).send({
            message: "Product not found",
          });
        }
        Product.findById(productId, (err, product) => {
          if (err) {
            return res.status(500).send({
              message: "Error to return data",
            });
          }
    
          if (!product) {
            return res.status(404).send({
              message: "Product not found",
            });
          }
    
          return res.status(200).send({ product });
        });
      },
      
    getProducts: function (req, res) {
        Product.find({})
        .exec((err, products) => {
            if (err) {
            return res.status(500).send({
                message: "Error to return the products",
            });
            }
            if (!products) {
            return res.status(404).send({
                message: "Products not found",
            });
            }
            
            return res.status(200).send({ products });
        });
    }
}

module.exports = controller;