const express = require("express");
const cors = require("cors");
const dns = require("dns");
dns.setServers(["8.8.8.8","8.8.8.4.4"])
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use(recipeRoutes);

app.listen(4000, () => {

    console.log("Server is running at http://localhost:4000");
});
