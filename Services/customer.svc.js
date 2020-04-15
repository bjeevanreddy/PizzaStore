const customermodel= require('../models/customer');

const customersvc= {
     InsertCustomer: function(data){
        let customer = new customermodel(data);
        return customer.save();
    },
    findmail: function(mail){
        return customermodel.findOne({email:mail}).exec();
    },
    finduser: function(name)
    {
        return customermodel.findOne({username:name}).exec();
    }
}

module.exports= customersvc;

