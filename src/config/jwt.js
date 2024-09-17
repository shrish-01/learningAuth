const { log } = require("console");
const crypto = require("crypto");

// Generate a random secret key
const secretKey = crypto.randomBytes(32).toString('hex');
// log(secretKey);

module.exports = {
    secretKey: secretKey
};