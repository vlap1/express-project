var async = require("async")
var from_one_two_five = [1,"два",3,4,5]
async.series([
firstWord,
secondWord,
thirdWord
],
function(err,result){
if(err) throw err;
console.log(result.join(' '))
});
function firstWord(callback){
callback(null, 'МАМА')
}
function secondWord(callback){
callback(null, 'МЫЛА')
}
function thirdWord(callback){
callback(null, 'РАМУ')
}

