const pizzamodel=require('../models/pizzas');

class pizzasvc
{
    insertDish(data){
        var pizzas=new pizzamodel(data);
        return pizzas.save();
    }
    fetchDishes()
    {
       return pizzamodel.find({},{addedTime:0,__v:0}).exec();
    }
    featuredprod()
    {
        return pizzamodel.find({featuredProduct:1},{addedTime:0,__v:0}).exec();
    }
    filtercategoryVeg()
    {
        return pizzamodel.find({category:"veg"},{addedTime:0,__v:0}).exec();
    }
    filtercategoryNonVeg()
    {
        return pizzamodel.find({category:"non-veg"},{addedTime:0,__v:0}).exec();
    }
    getdesiredDish(category,fid)
    {
        return pizzamodel.find({category:category,featuredProduct:fid},{addedTime:0,__v:0}).exec();
    }

}

module.exports=new pizzasvc();