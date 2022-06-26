var mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/all')
var Hero = require("./models/hero").Hero
var hero = new Hero({
title: "Пятачок",
nick: "pig"
})
console.log(hero)
hero.save(function(err, hero, affected){
console.log(hero.title)
})

