const db = require("../config/db");

const UserSchema = new db.Schema({
    name: String,
    email: String,
    password: String,
    role: { 
        type: String, 
        enum: ["admin", "customer"],
        default: "customer"
    }
});

module.exports = db.model("User", UserSchema);