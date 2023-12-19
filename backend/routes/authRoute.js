const express=require("express");
const router=express.Router();
const { registerController,loginController } = require("../controllers/authController");


//Register
router.post('/register',registerController)

//login
router.post('/login',loginController)







module.exports=router
