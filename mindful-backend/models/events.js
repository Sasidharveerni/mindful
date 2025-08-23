const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Theme: {
        type: String,
        required: true
    },
    imgLink: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    eventLocation: {
        type: String,
        required: true
    },
    sessions: {
        type: Array, // [{Track1: value, Track2: value, ...}]
        required: true
    },
    registeredUsers: {
        type: Array, // [ref(UserIds)]
    }
})

const events = mongoose.model('Events', eventSchema)

module.exports = {events}