// var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express()
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(function(req,res) {
//     res.setHeader('Content-Type', text/plain)
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
// });

require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });