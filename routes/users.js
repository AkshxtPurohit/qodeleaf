var mongoose=require("mongoose");
var passportLocalMongoose=require('passport-local-mongoose');
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/nnn");

var userSchema=mongoose.Schema({
  username:String,
  password:String
})

userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("user",userSchema);