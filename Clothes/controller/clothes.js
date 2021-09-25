const clothes = require('../model/clothes.js');
const user_signup = require('../model/user_signup.js');



exports.cloth = (req, res) => {

    if(!req.body) {
        
        return res.status(400).send({
            message: "Clothes can not be empty"
        });
    }

    const cloth = new clothes({
        title: req.body.title || "No cloth title", 
        description: req.body.description,
        price: req.body.price,
    });

    cloth.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong"
        });
    });
};


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

exports.signup = (req, res) => {
  
    if(!req.body) {
        
        return res.status(400).send({
            message: "Clothes can not be empty"
        });
    }

    const signup = new user_signup({
        email: req.body.email || "No cloth email", 
        password: req.body.password,
        confirm_password: req.body.confirm_password,
    });

    signup.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong"
        });
    });
};