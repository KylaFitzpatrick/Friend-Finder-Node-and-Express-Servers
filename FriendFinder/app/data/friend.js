// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Friends (DATA)
// =============================================================
var friends = [
    {
      "name":"Maggie",
      "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      "scores":[
          5,
          1,
          4,
          4,
          5,
          1,
          2,
          5,
          4,
          1
        ]
    
    },
    {
      "name":"Jackie",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        2,
        1,
        3,
        3,
        4,
        1,
        2,
        3,
        2,
        1
      ]
  
    },
    {
      "name":"Jenny",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        3,
        1,
        3,
        3,
        5,
        1,
        2,
        3,
        2,
        1
      ]
  
    },
    {
      "name":"Sara",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        2,
        1,
        4,
        4,
        3,
        1,
        2,
        3,
        2,
        1
      ]
  
    }
  ];

  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
