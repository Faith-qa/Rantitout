const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'users'
    }, 
    date: {type: Date, unique: true, sparse: true, required: true},
    messages: [{
        chat1: String,
        chat2: String
            }]
   
}
,
{
    timestamps: true
}
);

module.exports = mongoose.model('chats', chatSchema)