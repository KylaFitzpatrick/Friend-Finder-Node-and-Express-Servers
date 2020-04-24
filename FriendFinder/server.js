var bodyParser = require("body-parser");
var express = require("express");
// var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// starts the server to begin listening

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });