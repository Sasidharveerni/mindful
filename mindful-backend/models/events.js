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
   
    sessions: {
        type: Array, // ["session-1", "session-2"]
        required: true
    },
    registeredUsers: {
        type: Array, // [ref(UserIds)]
    }
})

const events = mongoose.model('Events', eventSchema)

module.exports = {events}