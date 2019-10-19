var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Burger = sequelize.define("Burger", {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});

Burger.sync();

// var burger = {
//     all: function(cb){
//         orm.selectAll("burgers", function(data){
//             cb(data);
//         });
//     },
//     create: function(cols, vals, cb){
//         orm.insertOne("burgers", cols, vals, function(data){
//             cb(data);
//         });
//     },
//     update: function(objColVals, condition, cb){
//         orm.updateOne("burgers", objColVals, condition, function(data){
//             cb(data);
//         });
//     },
//     delete: function(condition, cb){
//         orm.deleteOne("burgers", condition, function(data){
//             cb(data);
//         });
//     }
// }
 module.exports = Burger;