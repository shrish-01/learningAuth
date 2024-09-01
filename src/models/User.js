const mongoose = require("../config/db");
// const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { 
        type: String, 
        enum: ["admin", "customer"],
        default: "customer"
    }
});

module.exports = mongoose.model("User", UserSchema);