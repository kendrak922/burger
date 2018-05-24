const connection = require("../config/connection.js")

function printQuestionMarks(num) {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  function objToSql(ob) {
    let arr = [];
  
    for (const key in ob) {
      const value = ob[key];

      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
  }
  
  

const orm = {

    selectAll : function(tableInput, cb){
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err,result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne : function(table, cols, vals, cb){
        const queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    

        connection.query(queryString, vals, function(err, reuslt){
           if (err) throw err;
          cb(result)
        })
    },

    updateOne : function(table, objColVals, condition, cb){
        const queryString = "UPDATE " + tables;
        queryString += "SET ";
        queryString += objToSql(objColVals)
        queryString += "WHERE ";
        queryString += condition;

        connection.query(querySting, function(err, result){
            if(err) throw err;
            cb(result);
        })

    }
}


module.exports = orm;