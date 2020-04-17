const customersvc = require('../Services/customer.svc');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require('../config');

const customermodel = require('../models/customer');
const customercntrl = {
    customerInsert: function (req, res) {
        req.body.password = bcrypt.hashSync(req.body.password, 2);
        const user = customersvc.findmail(req.body.email);
        console.log(user);
        const data = req.body;
        const inserted = customersvc.InsertCustomer(data);
        if (inserted) {
            res.send("Your Registered Successfully").status(200);
        }
        else {
            res.send("Not Registerd...").status(200);
        }
    },
    customerLogin: async function(req,res){
        try{
        const user=  await customersvc.findmail(req.body.email); //2ms
        let pass=bcrypt.compareSync(req.body.password,user.password)
        let token=jwt.sign({customerName:user.username,cusId:user._id},config.SECRET_KEY,{expiresIn: config.expirationTime})
        if(pass){
            res.send({"token":token,"message":"You are logged in successfully"}).status(200);
        }else{
            res.send("Incorrect password").status(200);
        }

        }
        catch(err)
        {
            res.send({"status":0,"message":"Internal server error"}).status(500);
        }
    },

    /// using callbacks

    // customerLogin: function (req, res) {
    //     customersvc.findmail(req.body.email, (err, user) => {
    //         if (user) {
    //             let pass = bcrypt.compareSync(req.body.password, user.password)
    //             if (pass) {
    //                 res.send({ "status": 1, "message": "You are logged in successfully" }).status(200);
    //             } else {
    //                 res.send("Incorrect password").status(200);
    //             }

    //         }
    //         else{
    //             res.json({"message":"Internal server Error","error":err}).status(500);
    //         }

    //     })
    // }
}


module.exports = customercntrl;