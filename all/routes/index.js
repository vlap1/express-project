var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница кота 
router.get('/cat', function(req, res, next) {
  res.render('hero', {
  	title: "Просто кот",
  	picture: "images/cat.jpg",
  	desc: "Просто милый кот"
  });
});*/

/* Страница Невидимки */
router.get('/invisible', function(req, res, next) {
  res.render('hero', {
  	title: "Невидимка",
  	picture: "images/invisible.jpg",
  	desc: "Тот самый невидимый персонаж из Монстров на каникулах. Но где же его одежда, если на нем видно только очки?"
  });
});

/* Страница Дракулы */
router.get('/dracula', function(req, res, next) {
  res.render('hero', {
  	title: "Граф Дракула",
  	picture: "images/dracula.jpg",
  	desc: "Является одним из самых опасных монстров в мире, но вы видели его взгляд, когда он смотрит на своего внука?"
  });
});

/* Страница Желе */
router.get('/jelly', function(req, res, next) {
  res.render('hero', {
  	title: "Желе",
  	picture: "images/jelly.jpg",
  	desc: "Самый забавный и мягкий персонаж. Не раз спасал героев мультфильма от падения с большой высоты."
  });
});


module.exports = router;
