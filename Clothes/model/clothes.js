const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('cloth', ProductSchema);