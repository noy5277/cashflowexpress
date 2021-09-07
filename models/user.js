const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    FullName: String,
    Username : String,
    Password : String,
    Id_Number : String
},);

module.exports=mongoose.model('User', userSchema,'User');