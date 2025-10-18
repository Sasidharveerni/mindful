const express = require('express')
const Registration = require('../models/registration')
const verifyToken = require('../middlewares/verifyToken')

const router = express.Router()

router.post('/register/event', async (req, res) => {
    try {
        const {name, email, interestedPackage, eventName, paymentCompletion} = req.body

        const existingRegistration = await Registration.findOne({email: email, eventName: eventName, interestedPackage: interestedPackage})

        if(existingRegistration) {
            return res.status(400).json({
                status: 'Failed',
                message: 'You have already registered with this event'
            })
        }

        const registration = new Registration ({
            name,
            email,
            interestedPackage,
            eventName,
            paymentCompletion
        })

        await registration.save()

        return res.status(200).json({
            status: 'Success',
            message: 'You have registered successfully, thank you!'
        })
    } catch (error) {
        return res.status(500).json({
            status: 'Failed',
            message: 'Internal server error',
            error: error.message
        })
    }
})

router.get('/view/all/registrations', verifyToken, async (req, res) => {
    try {
       const registeredEvents = await Registration.find()
       
       if(registeredEvents) {
         return res.status(200).json({
            status: 'Success',
            events: registeredEvents
         })
       } 

       return res.status(400).json({
         status: 'Failed',
         message: 'No one registered in any of the event'
       })
    } catch (error) {
         return res.status(500).json({
            status: 'Failed',
            message: 'Internal server error',
            error: error.message
        })
    }
})

router.get('/view/registration/:id', verifyToken, async (req, res) => {
    try {
    const {id} =  req.params;
       const registeredEvents = await Registration.findById(id)
       
       if(registeredEvents) {
         return res.status(200).json({
            status: 'Success',
            events: registeredEvents
         })
       } 

       return res.status(400).json({
         status: 'Failed',
         message: 'No person is registered with given id'
       })
    } catch (error) {
         return res.status(500).json({
            status: 'Failed',
            message: 'Internal server error',
            error: error.message
        })
    }
})

module.exports = router