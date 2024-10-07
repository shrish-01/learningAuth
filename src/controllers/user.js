const userService = require("../services/user");

async function getUsers(req, res) {
    try {
        const user = await userService.getUsers();
        res.json(user);
    } catch (error) {
        res.status(500).json({
            message: error
        });
        return;
    }
};

module.exports = {
    getUsers,
}