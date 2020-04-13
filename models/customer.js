const mongoose = require('mongoose');

const CustomerSchema= mongoose.Schema({
    
        username:{
            type: String,
            required: [true,"Username is required"]
        },
        password:{
            type: String,
            required: [true,"passowrd is required"]

        },
        email:{
            type: String,
            unique:true,
            required: [true,"Email is required"]
        },
        mobile:{
            type: String,
            unique:true,
            required: [true,"Number is required"]
        },
        address:{
            type: String
        } 
});

const customermodel=mongoose.model("Customers",CustomerSchema);

module.exports=customermodel;