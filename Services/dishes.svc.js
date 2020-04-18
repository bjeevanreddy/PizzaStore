const pizzamodel=require('../models/pizzas');

class pizzasvc
{
    insertDish(data){
        var pizzas=new pizzamodel(data);
        return pizzas.save();
    }
}

module.exports=new pizzasvc();