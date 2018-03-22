var friends = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/viewfriends", function (req, res) {
    return res.json(friends);

  });
  app.post("/api/new", function (req, res) {
    var newfriend = req.body;
    console.log(newfriend);

    var bestFriend;
    var difference = 500;

    for (var i = 0; i < friends.length; i++) {
     // console.log("1  " + friends[i].name);
      var sum = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        //console.log("2   " + friends[i].scores[j]);

        sum = sum +( Math.abs(friends[i].scores[j] - parseInt(newfriend.scores[j])));
        //console.log(typeof parseInt(newfriend.scores[j]) );
        //console.log("sum "+sum + " array score : "+ friends[i].scores[j]+ " - "+newfriend.scores[j]);

      }
      if (sum < difference) {
        difference=sum;
        bestFriend = friends[i];
        console.log("4  " + bestFriend.name);
      }
    }
    friends.push(newfriend);
    console.log(" last name is array  "+newfriend.name);
    res.json(bestFriend);
    console.log(" true friend is "+bestFriend.name);
  });

}