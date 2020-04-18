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
        type:[Array]
    },
    description:{
        type:String
    },
    reviews:{
        type:[Object]
    },
    featured:{
        type:Boolean
    },
    category:{
        type:String 
    },
    addOns:{
        type:[Array]
    }
});

const pizzaModel=mongoose.model("pizzas",pizzaSchema);

module.exports=pizzaModel;
