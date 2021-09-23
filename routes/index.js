// Names : Noy Zozel , id: 311145270
//         Itay Nadler , id: 204701668

var express = require('express');
var router = express.Router();
const User=require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'index' });
});

router.get('/profile/:id', function(req, res, next) {

});

module.exports = router;
