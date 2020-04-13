const customermodel= require('../models/customer');

const customersvc= {
     InsertCustomer: function(data){
        let customer = new customermodel(data);
        return customer.save();
    }
}

module.exports= customersvc;

