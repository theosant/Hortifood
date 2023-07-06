const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    /*cpf: {
        type: String,
        required: true,
        unique: true,
    },*/
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,       
    },
    entered: {
        type: Date
    }

})

module.exports = mongoose.model("Users", userSchema);