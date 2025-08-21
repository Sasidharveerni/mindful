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
    isAdmin: 0,
    planType
}
payments: {
    what could we add here also I want to know that , if I add stripe / paypal / razorpay gateways suggest me a best way to implement so that above 2 fields I can implment now this payment I will implement later once I got kyc verification. also how do owner know the amount is flowing etc., how customer knows the transacion / invoice
}