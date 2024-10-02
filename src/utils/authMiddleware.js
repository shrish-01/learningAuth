const { secretKey } = require("../config/jwt");
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const authHeader = req.header("Authorization");
    if(!authHeader) {
        return res.status(401).json({
            message: "Un-authorized, missing token!"
        });
    }

    const [bearer, token] = authHeader.split(" ");
    if(bearer !== "Bearer" || !token) {
        return res.status(401).json({
            message: "Un-authorized, invalid token format"
        });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if(err) {
            res.status(403).json({
                message: "Forbidden: Invalid token"
            });

            req.user = user;
            next();
        }
    });
}

module.exports = {
    authenticateToken
}