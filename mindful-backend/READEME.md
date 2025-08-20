Events : {
    name: String,
    Theme: String,
    Venue: String,
    imgLink: String
    Date: date
    Sessions: Array,
    buyticket: [onlyreg, planA, planB, virtual],
    benifits:
}

Events : {
    name,
    Theme,
    imgLink,
    Venue,
    Date, 
    Sessions,
    buyticket: [onlyreg, planA, planB, virtual],
    benifits
}

User: {
    name,
    email,
    password,
    RegisteredEvent: ref(Events(name)),
    isSpeaker: 0
    isAdmin: 0
}