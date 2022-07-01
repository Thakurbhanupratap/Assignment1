const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true
    },
    password : {
        type : String,
        required : true
    }
}, {timestamps:true});

userSchema.pre("save", async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;