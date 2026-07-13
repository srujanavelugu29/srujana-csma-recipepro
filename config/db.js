const mongoose = require("mongoose");

const connectDB = async () => {

    try {

        await mongoose.connect("mongodb://localhost:27017/RecipeBook");

        console.log("Database Connected");

    } catch (error) {

        console.log("Database Connection Failed");

    }

}

module.exports = connectDB;