
var express = require("express");


var app = express();
var PORT = process.env.PORT || 3000;

// sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// starts the server to begin listening

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });