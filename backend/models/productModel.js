const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"]
    },
    description:{
        type:String,
        required:[true,"Please enter product description"]
    },
    price:{
        type:Number,
        required:[true,"enter product price"],
        maxLenght:[6,"price is max in lakhs"]
    },
    rating:{
        type:Number,
        default:0
    },
    image:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    category:{
        type:String,
        required:[true,"enter product category"]
    },
    stock:{
        type:Number,
        required:[true,"enter stock of project"],
        maxLenght:[4,"stock cant exceed for digits"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    review:[
        {
            name:{
                type:String,
                required:true,

            },
            rating:{
                type:Number,
                required:true 
            },
            comment:{
                type:String,
                required:true
            }

        }
    ]

    
    
    

})



module.exports=mongoose.model("Product",productSchema)