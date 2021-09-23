// Names : Noy Zozel , id: 311145270
//         Itay Nadler , id: 204701668

const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Fullname:String,
    Username:String,
    Password:String,
    Id_Number:String,
    Birthday:Date,
    Maritalstatus:String,
    Revision:Number,
    City:String
});

module.exports = mongoose.model('User',userSchema,"User");