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
  var chosen = req.params.friend;

  console.log(chosen);

  for (var i = 0; i < friendData.length; i++) {
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
  var newFriend = req.body;

  // Using a RegEx Pattern to remove spaces from newFriend
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFriend = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  friendsData.push(newFriend);

  res.json(newFriend);
});
}

