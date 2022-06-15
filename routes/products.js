var express = require("express");
var router = express.Router();
var db = require("../conection_db/conection");
//seccion product
router.get("/", function (req, res, next) {

  db.query("SELECT * FROM products", function (err, result) {
    console.log(result);
    res.render("products", {Guitar:result});
  });

 
});

module.exports = router;
