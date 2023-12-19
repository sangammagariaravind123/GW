const express = require("express");
const Category = require("../models/Category");

const router = express.Router();

router.post("/getdata", async (req,res) => {
    const result = await Category.find()
    res.json({"Category": result})
});

module.exports = router;