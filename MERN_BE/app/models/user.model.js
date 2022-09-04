const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {type:String},
    email: {type:String,required:true},
    password: {type:String, required:true},
    phone : {type:Number},
    address: {type:String}
   
  })
);

module.exports = User;
