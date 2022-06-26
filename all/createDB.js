var mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/all')
var Hero = require("./models/hero").Hero
var async = require("async")
var data = require('./data.js').data
// 1. Очистить базу данных all
// 2. Вставить 5 героев
// 3. Закрыть соединение с базой данных
async.series([
        open,
        dropDatabase,
        requireModels,
        createHeroes
    ],
    function(err,result){
        mongoose.disconnect()
    })

function open(callback){
    mongoose.connection.on("open",callback)
    console.log("Открыта")
}

function dropDatabase(callback){
    var db = mongoose.connection.db
    db.dropDatabase(callback)
    console.log("База дропнута")
}

function createHeroes(callback){
    async.each(data, function(heroData, callback){
            var hero = new mongoose.models.Hero(heroData)
            hero.save(callback)
        },
        callback)
        console.log("Герои созданы")
}

function requireModels(callback){
    require("./models/hero").Hero

    async.each(Object.keys(mongoose.models),function(modelName){
        mongoose.models[modelName].ensureIndexes(callback)
    },
        callback
    )
    console.log("Модели проиндексированы")
}
