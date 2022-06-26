var async = require("async")
var from_one_two_five = [1,"два",3,4,5]
async.waterfall([
function(callback){
callback(null, "МАМА", "МЫЛА","РАМУ")
},
function(arg1, arg2, arg3, callback){
callback(null, arg1 + ' ' + arg2 + ' ' + arg3)
}
],
function(err, result){
if(err) throw err
console.log(result)
});



