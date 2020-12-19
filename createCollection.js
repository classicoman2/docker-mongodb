var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

//var nomColl = "customers";
var nomColl = "customers2";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection(nomColl, function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
