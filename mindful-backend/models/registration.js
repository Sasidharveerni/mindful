const mongoose = require('mongoose')

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
         trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
        required: true
    },
    eventName : {
        type: String,
        required: true,
    },
    interestedPackage: {
        type: String,
        required: true
    },
    paymentCompletion: {
        type: Boolean,
        default: 'No',
        required: true
    },
},
{
    timestamps: true
}
)

const Registration =  mongoose.model('Registration', registrationSchema)

module.exports = Registration