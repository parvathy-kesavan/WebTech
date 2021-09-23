const clothes = require('../model/clothes.js');


exports.cloth = (req, res) => {
    // Request validation
    if(!req.body) {
        
        return res.status(400).send({
            message: "Clothes can not be empty"
        });
    }
    // Create a Product
    const cloth = new clothes({
        title: req.body.title || "No cloth title", 
        description: req.body.description,
        price: req.body.price,
    });
    // Save Product in the database
    cloth.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong"
        });
    });
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
    clothes.find()
    .then(c => {
        console.log('found items');
        res.send(c);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong"
        });
    });
};

