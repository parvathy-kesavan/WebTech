const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

    email: String,
    password: String,
    confirm_password: String
    
}, {
    timestamps: true
});

module.exports = mongoose.model('user_signup', ProductSchema);