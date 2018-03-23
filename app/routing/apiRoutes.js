var friends = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/viewfriends", function (req, res) {
    return res.json(friends);

  });
  app.post("/api/new", function (req, res) {
    var newfriends = req.body;
    console.log(newfriends);

    var bestFriend;
    var difference = 500;

    for (var i = 0; i < friends.length; i++) {
     // console.log("1  " + friends[i].name);
      var sum = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        //console.log("2   " + friends[i].scores[j]);
        sum = sum +( Math.abs(friends[i].scores[j] - parseInt(newfriends.scores[j])));
      }
      if (sum < difference) {
        difference=sum;
        bestFriend = friends[i];
        console.log("4  " + bestFriend.name);
      }
    }
    // var newscore=[];
    // newscore.push(parseInt(newfriends.scores));
    //var result=arr.map(Number);
   // console.log("new friend scores "+newfriends.scores);
   // console.log("new friend scores 1 "+parseInt(newfriends.scores));

    //console.log(newscore);
    var newfriend ={
      name : newfriends.name,
      photo : newfriends.photo,
      scores :[newfriends.scores]
    };
    friends.push(newfriend);
    console.log(" scores is array1 "+newfriends.scores);
    console.log(" scores is array2   "+newfriend.scores);

    res.json(bestFriend);
    console.log(" true friend is "+bestFriend.name);
  });

}