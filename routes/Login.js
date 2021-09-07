var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const User=require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'login' });
});

router.post('/', function(req, res, next) {
    User.create({
        _id: new mongoose.Types.ObjectId,
        FullName:'Eden Sella',
        Username:'edens',
        Password:'Aa1212',
        Id_Number:'325478541'
    },function (err,person)
    {
        if (err) console.log(err);
    }
);
});
module.exports = router;