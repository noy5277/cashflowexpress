var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'signup' });
});

router.post('/',(req,res,next)=>
{
  const user = new User({
    _id:new mongoose.Types.ObjectId(),
    Fullname: req.body.inputFullname,
    Username: req.body.inputUsername,
    Password: req.body.inputPassword,
    Id_Number: req.body.inputId,
    Birthday: req.body.inputBirthday,
    Maritalstatus:req.body.inputMaritalstatus
  });
  user.save().then(result => {
    console.log(result);
  }).catch(err => console.log(err));
  res.status(201).redirect('/');
});

module.exports = router;
