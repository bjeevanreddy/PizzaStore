const customersvc= require('../Services/customer.svc');
const bcrypt=require('bcryptjs');
const customercntrl={
    customerInsert: function(req,res){
        
        req.body.password=bcrypt.hashSync(req.body.password,2);
        const user= customersvc.findmail(req.body.email);
        console.log(user);
        const data=req.body;
        const inserted = customersvc.InsertCustomer(data);
        if(inserted)
        {
            res.send("Your Registered Successfully").status(200);
        }
        else{
            res.send("Not Registerd...").status(200);
        }
    },
    customerLogin: async function(req,res){
        const user= await customersvc.findmail(req.body.email);
        console.log(req.body);
        console.log(user);
        let pass=bcrypt.compareSync(req.body.password,user.password)
        if(pass){
            res.send("You are logged in successfully").status(200);
        }else{
            res.send("Incorrect password").status(200);
        }
    }
}


module.exports=customercntrl;