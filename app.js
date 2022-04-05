var express = require("express")
var app = express()
app.get("/",function(req,res){
	res.send("Серверная информация для браузера")
})
app.listen("3000")
