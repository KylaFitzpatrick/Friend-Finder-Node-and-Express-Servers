// Dependencies
// =============================================================
var friendsData = require("../data/friend.js")

// // Sets up the Express App
// // =============================================================


// Routes
// =============================================================
module.exports = function(app){
// Displays all Friends
app.get("/api/friends", function(req, res) {
  res.json(friendsData);
});

// Displays a single friend, or returns false
app.get("/api/friends/:friend", function(req, res) {
  var chosen = req.params.friendData;

  console.log(chosen);

  for (var i = 0; i < friendsData.length; i++) {
    if (chosen === friendsData[i].routeName) {
      return res.json(friendsData[i]);
    }
  }

  return res.json(false);
});

// Create New Friends - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  

  // Using a RegEx Pattern to remove spaces from newFriend
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

//scoresFriend = req.body.scores.map(Number);
//convert scores to int
//match friends based on closest scores
//loop through score and find score with the smallest difference

  friendsData.push(req.body)
  res.json(true);
  console.log(req.body);

});
}

