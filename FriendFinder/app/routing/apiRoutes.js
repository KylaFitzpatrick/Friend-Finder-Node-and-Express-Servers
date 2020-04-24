// dependencies
var friendsData = require("../data/friend.js")

module.exports = function(app){
// Displays all Friends
app.get("/api/friends", function(req, res) {
  res.json(friendsData);
});
app.get("https://github.com/KylaFitzpatrick/Friend-Finder-Node-and-Express-Servers", function(req, res) {
    res.json();
  });
// displays a single friend, or returns false
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

// create New Friends - takes in JSON input
app.post("/api/friends", function(req, res) {

//convert scores to int
//match friends based on closest scores
//loop through score and find score with the smallest difference
//for loop for friends array
for(var i = 0; i < friendsData.length; i++){
    var totalDifference = 0
    for(var j = 0; j < friendsData[i].scores.length; j++){
        req.body.scores[j] = parseInt(req.body.scores[j])
        totalDifference += Math.abs((friendsData[i].scores[j] - req.body.scores[j]))
    }
    friendsData[i].totalDifference = totalDifference
}


friendsData.sort(function(a,b){
    return a.totalDifference - b.totalDifference;
})

console.log(friendsData)
//for loop for scores
//difference between friends array score and user score and absolute value of difference then add absolute difference together
//sort the absolute difference and chose the friend with least difference 
  friendsData.push(req.body)
  res.json(friendsData[0]);
  console.log(req.body);

});
}

