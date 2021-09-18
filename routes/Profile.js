var express = require('express');
var router = express.Router();
const User=require('../models/user');
const Cost=require('../models/cost');

/* GET home page. */
router.get('/', function(req, res, next) {

});

router.get('/:id', async function (req, res, next) {
    User.findById(req.params.id)
        .exec()
        .then(doc => {
            let user = doc.toObject();
            if (doc)
                res.render('profile',{
                   Fullname:user.FullName,
                   link:"/profile/"+user._id
                });
            else
                res.status(200).json({
                    message: "Cant find user id"
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        });
});
module.exports = router;
