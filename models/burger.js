const orm = require("../config/orm.js")

const burgerStuff = {
selectAll: function(cb){
    orm.selectAll("burgers", function(res){
        cb(res);
    });
},
updateOne: function(condition, objColVals, cb) {
    orm.updateOne("burgers", condition, objColVals, function(res){
        cb(res);
    });
},

insertOne: function(objColVals, values, cb){
    orm.insertOne("burgers", values, objColVals, function(res){
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