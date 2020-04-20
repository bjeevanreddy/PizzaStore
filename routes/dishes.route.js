const pizzacntrl=require('../controllers/dishes.cntrl');
const express=require('express');

const dishroute=express.Router();

dishroute.post('/addDish',pizzacntrl.DishInsert);
dishroute.get('/showdishes',pizzacntrl.showDishes);
dishroute.get('/featured',pizzacntrl.getFeatured);
dishroute.get('/veg',pizzacntrl.getVegDishes);

module.exports=dishroute;