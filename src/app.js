require("dotenv").config();
const express = require("express");
const signupRoute = require("./routes/signup");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/user", signupRoute);

app.get('/home', (req, res) => {
    res.json({
        "message": "test route is working fine!"
    });
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} & can be accessed on http://localhost:${PORT}`);
});