const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({

    image: String,

    name: String,

    category: String,

    ingredients: String,

    preparation: String

});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;