var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница кота */
router.get('/cat', function(req, res, next) {
  res.send('<h1>Страница кота</h1>');
});

/* Страница Невидимки */
router.get('/invisible', function(req, res, next) {
  res.send('<h1>Страница Невидимки</h1>');
});

/* Страница Дракулы */
router.get('/dracula', function(req, res, next) {
  res.send('<h1>Страница Дракулы</h1>');
});

/* Страница Желе */
router.get('/jelly', function(req, res, next) {
  res.send('<h1>Страница Желе</h1>');
});


module.exports = router;
