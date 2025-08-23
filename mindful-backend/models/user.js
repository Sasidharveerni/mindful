const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        required: true
    },
    isSpeaker: {
        type: Array,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },

    registeredEvents: {
        type: Array
    },


})

const user = new mongoose.model('User', userSchema)

module.exports = {user}