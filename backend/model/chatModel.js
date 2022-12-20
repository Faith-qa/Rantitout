const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'users'
    }, 
    date: {type: Date, unique: true, sparse: true},
   messages: [{message: String},{AImessage: String}]
   
},
{
    timestamp: true
}
);

module.exports = mongoose.model('chats', chatSchema)