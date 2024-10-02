require("dotenv").config();
const express = require("express");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/user");
const createAdminAccount = require("./scripts/admin");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

createAdminAccount();

app.use("/user", signupRoute);
app.use("/auth", loginRoute);
app.use("/api", userRoute);

app.get('/home', (req, res) => {
    res.json({
        "message": "test route is working fine!"
    });
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} & can be accessed on http://localhost:${PORT}`);
});