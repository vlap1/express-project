var async = require("async")
var from_one_two_five = [1,"два",3,4,5]
async.series([
function(callback){
callback(null,"МАМА")
},
function(callback){
callback(null,"МЫЛА")
},
function(callback){
callback(null,"РАМУ")
}],
function(err,result){
if(err){
console.log("Ошибка: "+err)
} else {
console.log(result)
}
}
)


