var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://127.0.0.1:27017/test", function(err, db) {
    if (err) { return console.log(err); }
    console.log('connection established');
    console.log(db);
    var collection = db.collection('test');
    var doc1 = { 'hello': 'doc1' };
    var doc2 = { 'hello': 'doc2' };
    var lostOfDocs = [{ 'hello': 'doc3' }, { 'hello': 'doc4' }];

    ////collection.insert(doc1);
    //collection.insert(doc2, { w: 1 }, function(err, result) { if (err) { console.log(err.message)} });
    //collection.insert(lostOfDocs, { w: 1 }, function(err, result) { });
    collection.find({}).toArray(function (err, result) {
        if (err) {
            console.log(err);
        } else if (result.length) {
            console.log(result);
        }
        db.close();
    });

});