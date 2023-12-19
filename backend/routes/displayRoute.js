const express=require("express");
const { getLaptopList } = require("../controllers/Laptop");
const laptopModel = require("../models/laptopModel");
const router=express.Router();




router.get("/laptop",(req,res) => {
    laptopModel.find()
    .then(data => res.json(data))
    .catch(err => res.status(404).json({ nobooksfound: 'No Products found' }));
})

module.exports=router;