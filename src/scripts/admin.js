const User = require("../models/User");
const bcrypt = require("bcrypt");

async function createAdminAccount() {
    try {
        const existingAdmin = await User.findOne({
            email: "admin@test.com"
        });
        if(!existingAdmin) {
            const adminUser = new User({
                email: "admin@test.com",
                name: "admin",
                passowrd: await bcrypt.hash("admin", 10),
                role: "admin"
            });

            await adminUser.save();
            console.log("Admin account created succesfully!");
        } else {
            console.log("Admin already exists!");
        }
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = createAdminAccount;