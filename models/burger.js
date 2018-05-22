const orm = require("../config/orm.js")

const burgerStuff = {
selectAll: function(cb){
    orm.selectAll("burgers", function(res){
        cb(res);
    });
},
updateOne: function(condition, burger_name, cb) {
    orm.updateOne("burgers", condition, burger_name, function(res){
        cb(res);
    });
},

insertOne: function(burger_name, condition, cb){
    orm.insertOne("burgers", condition, burger_name, function(res){
       cb(res);
    })
}

// delete: function(condition, cb){
//     orm.delete("burgers", condition, function(res){
//         cb(res);
//     });
// }
};

module.exports = burgerStuff;