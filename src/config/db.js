const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", () => {
    console.log("Error connecting to MongoDB");
});