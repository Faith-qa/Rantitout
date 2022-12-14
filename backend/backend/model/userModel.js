const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: [true, "please add an email"],
    },
    password: {
        type: String,
        required: [true, "user must have a password"]
    },
    imageUrl: String
    },
    {
        timestamp: true,
    }
    

);
module.exports = mongoose.model('users', userSchema)