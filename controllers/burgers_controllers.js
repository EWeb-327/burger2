var express = require("express")
var router = express.Router()
var Burger = require("../models/burger")

router.get("/", function(req,res){
        res.render("index")
});

router.get("/burgers", function(req, res){
    Burger.findAll().then(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);

        res.render("lists", hbsObject)
    });
})

router.post("/api/burgers", function(req,res){
    Burger.create(req.body);
    res.status(204).end()
});

router.put("/api/burgers/:id", function(req,res){
   Burger.update(req.body, {
       where: {
           id: req.body.id
       }
   }).then(function(data){
       res.json(data)
   })
});

router.delete("/api/burgers/:id", function(req,res){
   Burger.destroy({
       where: {
           id: req.params.id
       }
   }).then(function(data){
       res.json(data);
   })
});

module.exports = router;