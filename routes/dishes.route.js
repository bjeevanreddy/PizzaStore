const pizzacntrl=require('../controllers/dishes.cntrl');
const express=require('express');

const dishroute=express.Router();

dishroute.post('/addDish',pizzacntrl.DishInsert);


module.exports=dishroute;