const mongoose= require('mongoose');

const pizzaSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Dish name is required"]
    },
    price:{
        type:String
    },
    images:{
        type:[String] 
    },
    description:{
        type:String
    },
    reviews:{
        type:[Object]
    },
    featuredProduct:{
        type:Number,
        default:1
    },
    addedTime:{
        type:Date,
        default:new Date().toISOString()
    },
    category:{
        type:String 
    },
    addOns:{
        type:[String]
    },
    available:{
        type:Number,
        default:1
    },
    rating:{
        type:Number
    }
});

const pizzaModel=mongoose.model("pizzas",pizzaSchema);

module.exports=pizzaModel;
