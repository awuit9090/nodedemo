var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
    var dbo = db.db("mydb");
      var myquery = { address: "Canyon 123" };
        var newvalues = { $set: { address: "Valley 345" } };
	  dbo.collection("customers").updateOne(myquery, newvalues, (err, res) => {
	      if (err) throw err;
	          console.log("1 document updated");
		      db.close();
		        });
			});
