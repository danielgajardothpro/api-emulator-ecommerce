"use strict";

var express = require("express");
var EcomerceController = require("../controllers/ecomerce");

var router = express.Router();


router.get("/test", EcomerceController.test);
router.get("/product/:id", EcomerceController.getProduct);
router.get("/products", EcomerceController.getProducts);

module.exports = router;