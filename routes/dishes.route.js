const pizzacntrl=require('../controllers/dishes.cntrl');
const express=require('express');
const multer= require('multer');
const dishroute=express.Router();
const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/')
    },
    filename: function(req,file,cb){
        let filename=Date.now()+'-'+file.originalname;
        //let filename="pizzastore-"+ file.originalname;
        req.body.images=filename;
        cb(null,filename);
    }
});
const upload=multer({storage:storage});
dishroute.post('/addDish',upload.single('images'),pizzacntrl.DishInsert);
dishroute.get('/showdishes',pizzacntrl.showDishes);
dishroute.get('/featured',pizzacntrl.getFeatured);
// dishroute.get('/veg',pizzacntrl.getVegDishes);
dishroute.get('/dishes/:VegNon/:fid',pizzacntrl.dishesVegNonveg);

module.exports=dishroute;