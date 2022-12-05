const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'users'
    }, 
    date: {type: Date, unique: true, sparse: true},
    hi: String,
    HowAreYou: String,
    tellMeMore: String,
    isThatAll: String,
    whatAreWeLearning: String,
    isitReallyWorthTheStress: String,

},
{
    timestamp: true
}
)
