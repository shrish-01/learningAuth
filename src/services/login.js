const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generateToken } = require("../utils/jwtUtil");

async function login(email, password) {
    try {
        const existingUser = await User.findOne({ email });
        if(!existingUser) {
            throw new Error("User not found");
        }
        // console.log(password);
        // console.log(existingUser.password); // the error was because, this was undefined!
        const isPasswordValid = bcrypt.compare(password, existingUser.password);
        if(!isPasswordValid) {
            throw new Error("Incorrect password!");
        }

        const token = generateToken(existingUser);
        return token;
    } catch (error) {
        // console.error("Login Error: ", error.message);
        throw new Error("Invalid credentials");
    }
}

module.exports = {
    login
}