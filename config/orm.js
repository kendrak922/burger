const connect = require("../config/connection.js")

const orm = {

    selectAll : function(){
        const queryString = "SELECT * FROM burgers";
        connection.query(querySting, [], function(err,result){
            if (err) throw err;
            console.log(result);
        });
    }
    insertOne : function(){

    }

    updateOne : function(){

    }
}


module.exports = orm;