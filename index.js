const express = require('express');
const mongoose = require('mongoose');
const config = require('./config')
var bodyParser = require('body-parser');

const app = express();

const customerroute = require('./routes/customer.route');
const dishroute = require('./routes/dishes.route');

app.use(bodyParser.json());

app.use('/customer', customerroute);
app.use('/products', dishroute);

mongoose.connect(config.mongourl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
    console.log("Database Connection Success");
    if (err) {
        console.log("Not connected! Error");
    }
});

app.listen(3002, () => {
    console.log("Connected to Server 3002");
});

