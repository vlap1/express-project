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

var mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/test')
var schema = mongoose.Schema({ name: String })
schema.methods.meow = function(){
console.log(this.get("name") + " сказал мяу")
}
var Cat = mongoose.model('Cat', schema)
var kitty = new Cat({ name: 'Пушок' })
kitty.save(function (err) {
kitty.meow()
})
