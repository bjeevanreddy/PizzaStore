const express= require('express');

const customercntrl= require('../controllers/customer.cntrl');

const  customerRoute=express.Router();

customerRoute.post('/register',customercntrl.customerInsert);


module.exports=customerRoute;