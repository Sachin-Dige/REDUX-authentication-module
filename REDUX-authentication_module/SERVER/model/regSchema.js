const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    repassword:String,
});

module.exports=mongoose.model("reg_users",registerSchema);