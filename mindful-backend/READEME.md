Events : {
    name: String,
    Theme: String,
    Venue: String,
    Date: date
    Sessions: Array,
    buyticket: [onlyreg, planA, planB, virtual],
    benifits:
}

User: {
    name,
    email,
    password,
    RegisteredEvent: ref(Events(name)),
    isSpeaker: 0
    isAdmin: 0
}