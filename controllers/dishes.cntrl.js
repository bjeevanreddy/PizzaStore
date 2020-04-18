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
    }
}

module.exports = pizzacntrl;