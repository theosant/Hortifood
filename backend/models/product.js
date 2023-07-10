const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    type: {
        required: true,
        type: String
    },
    on_stock: {
        required: true,
        type: Number
    },
    highlight: {
        required: true,
        type: Boolean
    },
    season: {
        required: true,
        type: Boolean
    },
    srcUrl: {
        required: true,
        type: String
    }

})

module.exports = mongoose.model("Products", productSchema);