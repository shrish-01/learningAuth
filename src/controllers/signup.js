const userService = require("../services/signup");

async function createUser(req, res, next) {
    try {
        const userData = req.body;
        const user = await userService.createUser(userData);
        res.status(201).json({
            user: user,
            message: "User created!",
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: error.message,
        });
    };
};

module.exports = {
    createUser,
};