var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("mydb");
  //Exclude the _id field from the result:
  dbo.collection("customers").find(
    {}, {projection: {name:0, address: 1}}
  ).toArray((err, result) => {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
