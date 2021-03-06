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

app.use(express.static('public'))

const routes = require("./controllers/burgers_controller.js");

app.use(routes);


  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  