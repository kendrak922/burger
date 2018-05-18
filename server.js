const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const exphbs = require("express-handlebars");
const connection = require("./config/connection.js")

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public/assets/css')));/// do css problems have something to do with this

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
  