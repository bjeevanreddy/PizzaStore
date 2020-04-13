const customersvc= require('../Services/customer.svc');

const customercntrl={
    customerInsert: function(req,res){
        const data=req.body;
        const inserted = customersvc.InsertCustomer(data);
        if(inserted)
        {
            res.send("Your Registered Successfully").status(200);
        }
        else{
            res.send("Not Registerd...").status(200);
        }
    }
}


module.exports=customercntrl;