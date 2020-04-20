const pizzasvc = require('../Services/dishes.svc');

const pizzacntrl = {
    DishInsert: async function (req, res) {
        try {
            let data = req.body;
            let pizza = await pizzasvc.insertDish(data);

            if (pizza) {
                res.send("inserted Successfully").status(200);
            } else {
                res.send("Somehing error occured").status(200);
            }

        }
        catch (error) {
            res.send("Internal Server Error").status(500);
        }
    },
    showDishes: async function (req, res) {
        try {
            let dishes = await pizzasvc.fetchDishes();
            if (dishes.length > 0) {
                res.send(dishes).status(200);
            }
            else {
                res.send("Try after Sometime").status(200);
            }

        }
        catch (error) {
            res.send("Internal Server Error " + error).status(500);
        }
    },
    getFeatured: async function (req, res) {
        try {
            let featuredpizzas = await pizzasvc.featuredprod();
            if (featuredpizzas.length > 0) {
                res.send(featuredpizzas).status(200);
            }
            else {
                res.send("There are no featured Products. Try Later").status(200);
            }

        } catch (error) {
            res.send("Internal Server Error " + error).status(500);
        }
    },
    getVegDishes: async function (req, res) {
        try {
            let veg = await pizzasvc.filtercategoryVeg();
            if (veg.length > 0) {
                res.send(veg).status(200);
            }
            else {
                res.send("There are no veg Products. Try Later").status(200);
            }


        } catch (error) {
            res.send("Internal Server Error " + error).status(500);
        }
    }
}

module.exports = pizzacntrl;