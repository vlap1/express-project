/*var MongoClient = require("mongodb").MongoClient
var data = require("./data.js").data

MongoClient.connect("mongodb://0.0.0.0:27017/all",
function(err,client) {
if(err) {
	throw err;
}

const db = client.db('all');
db.dropDatabase()

var collection = db.collection("heroes")
collection.insertMany(data,function(err,result){
client.close()
})
})*/

const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));