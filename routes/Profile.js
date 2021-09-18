var express = require('express');
var router = express.Router();
const User=require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {

});

router.get('/:id', function(req, res, next) {
    User.findById(req.params.id)
        .exec()
        .then(doc => {
            var user=doc.toObject();
            console.log(user.FullName);
            if(doc)
                res.render('profile',{Fullname:user.FullName});
            else
                res.status(200).json({
                    message:"Cant find user id"
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        });
});

module.exports = router;
