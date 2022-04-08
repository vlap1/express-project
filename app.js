var express = require("express")
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/",function(req,res){
	var form = '<!doctype html>'+
	'<html lang="ru">'+
	'<head>'+
	'<meta charset="UTF-8">'+
	'<title>Форма</title>'+
	'</head>'+
	'<body>'+
	'<h1>Форма для отправки данных на сервер</h1>'+
	'<form action="" method="post">'+
	'<textarea name="text" id="" cols="30" rows="10"></textarea><br/>'+
	'<input type="submit" value="Отправить данные на сервер"/>'+
	'</form>'+
	'</body>'+
	'</html>'
	res.send(form)
})
app.listen("3000", function(){
	console.log("Сервер работает и слушает порт: 3000")
})
app.post("/submit_result", function(req, res){
	console.log(req.body)
	res.send("Вы нажали на кнопку с типом submit")
})

