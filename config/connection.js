const mysql = require("mysql");

const connection;
if (process.env.JAWSDB_URL){
  connection =mysql.createConnection(process.env.JAWSDB_URL)
}else{

const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "jl6ljl7iez2vfkev"
});
  });


  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;