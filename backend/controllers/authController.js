const { hashPassword, comparePassword } = require("../helpers/authHelper")
const userModel=require("../models/userModel")
const JWT=require("jsonwebtoken")


exports.registerController = async (req, res) => {
    try {
      const { name, email, password, phone, address } = req.body;
      //validations
      if (!name) {
        return res.send({ message: "Name is Required" });
      }
      if (!email) {
        return res.send({ message: "Email is Required" });
      }
      if (!password) {
        return res.send({ message: "Password is Required" });
      }
      if (!phone) {
        return res.send({ message: "Phone no is Required" });
      }
      
      //check user
      const exisitingUser = await userModel.findOne({ email });
      //exisiting user
      if (exisitingUser) {
        return res.status(200).send({
          success: false,
          message: "Already Register please login",
        });
      }
      //register user
      const hashedPassword = await hashPassword(password);
      //save
      const user = await new userModel({
        name,
        email,
        phone,
        password: hashedPassword,
      }).save();
  
      res.status(201).send({
        success: true,
        message: "User Register Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Errro in Registeration",
        error,
      });
    }
  };

//login 

exports.loginController=async(req,res)=>{
    try{
        const{email,password}=req.body
        //validation
        if(!email || !password){
            return res.send(404).send({
                success:"fail",
                message:"invaild email or password"
            })
        }
        //check user 
        const user =await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:"email not registered"
            })
        }
        const match =await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"invaild password"
            })
        }

        //token
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.status(200).send({
            success:true,
            message:"login success",
            user:{
                name:user.name,
                email:user.eamil,
                phone:user.phone
            },
            token
        });

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in login",
        })
    }

};


