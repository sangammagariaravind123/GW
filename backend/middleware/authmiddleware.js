const JWT=require("jsonwebtoken");

//protected routes
exports.requireSignIn = async(req,res,next)=>{
    try{
        const decode=JWT.verify(
            req.headers.authrization,
            process.env.JWT_SECRET);
            next();

    }
    catch(error){
        console.log(error)
    }
}