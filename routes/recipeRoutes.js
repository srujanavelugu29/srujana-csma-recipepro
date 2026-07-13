const express = require("express");

const router = express.Router();

const Recipe = require("../models/RecipeModel");


// ADD RECIPE
router.post("/recipe/add", async (req, res) => {

    const { image, name, category, ingredients, preparation } = req.body;

    const recipe = new Recipe({

        image,
        name,
        category,
        ingredients,
        preparation

    });

    await recipe.save();

    res.json({

        message: "Recipe Added Successfully"

    });

});


// GET ALL RECIPES
router.get("/getrecipe", async (req, res) => {

    const all = await Recipe.find();

    res.json(all);

});


// GET ONE RECIPE
router.get("/getOneRecipe/:id", async (req, res) => {

    const recipe = await Recipe.findById(req.params.id);

    res.json(recipe);

});


// UPDATE RECIPE
router.put("/updateRecipe/:id", async (req, res) => {

    await Recipe.findByIdAndUpdate(req.params.id, req.body);

    res.json({

        message: "Recipe Updated Successfully"

    });

});


// DELETE RECIPE
router.delete("/deleteRecipe/:id", async (req, res) => {

    await Recipe.findByIdAndDelete(req.params.id);

    res.json({

        message: "Recipe Deleted Successfully"

    });

});

module.exports = router;


