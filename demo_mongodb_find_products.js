var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
    var dbo = db.db("mydb");

  dbo.collection("products").find({}).toArray((err, result) => {
    if (err) throw err;
      console.log(result);
    db.close();
  });
});
