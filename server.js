const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });


  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data){
        if(err){
            return res.render(500).end();
        }
        res.render("index", {burgers: data})
    });
});



  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  