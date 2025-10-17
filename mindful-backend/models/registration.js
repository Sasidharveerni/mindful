const mongoose = require('mongoose')

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: [],
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
    }
})

const Registration =  mongoose.model('Registration', registrationSchema)

module.exports = Registration