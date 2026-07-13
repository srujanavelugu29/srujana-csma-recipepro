const mongoose = require("mongoose");

const connectDB = async () => {

    try {

        await mongoose.connect("mongodb+srv://srujanavelugu29:srujana29@cluster0.6ak9wl5.mongodb.net/srujana");

        console.log("Database Connected");

    } catch (error) {

        console.log("Database Connection Failed");

    }

}

module.exports = connectDB;
