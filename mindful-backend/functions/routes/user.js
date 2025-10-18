const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express')
const User = require('../models/user')
const verifyToken = require('../middlewares/verifyToken')

const router = express.Router()

router.post('/register', async (req, res) => {
    try {
        const {name, email, password} = req.body

        const existingUsers = await User.findOne({email})

        if(existingUsers) {
            return res.status(400).json({
                status: 'Failed',
                message: 'Email already exists, please register with another email'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

       const newUser = new User({
        name,
        email,
        password: hashedPassword
       })

       await newUser.save();

       return res.status(200).json({
        status: 'Success',
        message: 'Registration successful'
       })

    } catch (error) {
         return res.status(500).json({
        status: 'Failed',
        message: 'Internal server error',
        err: error.message
       })

    }
})

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body

        const existingUsers = await User.findOne({email: email})

        if(existingUsers) {
            
            const isPasswordSame = bcrypt.compare(password, existingUsers.password)
            if(isPasswordSame) {
                const token = jwt.sign({id: existingUsers._id, email: existingUsers.email }, 'secretkey', { expiresIn: '1d'})
            return res.status(200).json({
                status: 'Success',
                token: token,
                user: existingUsers,
                message: 'User logged in successfully'
            })
        } else {
            return res.status(404).json({
                status: 'Failed',
                message: 'wrong password'
            })
        }
        } else {
            return res.status(501).json({
                status: 'Failed',
                message: 'User does not exist, please sign up'
            })
        }

        

       return res.status(400).json({
        status: 'Failed',
        message: 'Invalid email'
       })

    } catch (error) {
         return res.status(500).json({
        status: 'Failed',
        message: 'Internal server error',
        err: error.message
       })

    }
})

router.patch('/update/:userId', verifyToken, async (req, res) => {
    try {
        const {name, email, password}  = req.body;
        const {userId} = req.params;

        const updateFields = {};
        if (name) updateFields.name = name;
        if (email) updateFields.email = email;
        if (password) updateFields.password = await bcrypt.hash(password, 5);
        await User.findByIdAndUpdate(userId, updateFields)

        res.json({
            status: 'Success',
            message: 'Details updated successfully!'
        });
    } catch (error) {
        res.status(501).json({
            status: 'Failed',
            message: 'Something went wrong',
            err: error
        });
    }
})

router.post('/login/status', verifyToken, async (req, res) => {
    try {
        const {email} = req.body
        //console.log(email)
        const existingUser = await User.findOne({email})
        //console.log(existingUser)
        if(existingUser) {
            res.status(200).json({
                status: 'Success',
                message: 'User logged in previously',
                user: existingUser
               }) 
        }
         else {
            res.status(200).json({
                status: 'Success',
                message: 'User not found',
               }) 
         }
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: 'User not logged in, Please login!',
            error: 'There is an error: ' + error
           })
    }
});

router.get('/get-users', async (req, res) => {
    try {
        const existingUsers = await User.find()
        if (existingUsers) {
            return res.status(200).json({
                status: 'Success',
                userDetails: existingUsers
            })
        } else {
            return res.status(501).json({
                status: 'Failed',
                message: 'User Does not exist, please register!'
            })
        }
    } catch (error) {
        res.status(501).json({
            message: 'Something went wrong',
            err: error
        });
    }
})

router.delete('/delete-user/:userId', async (req, res) => {
    try {
        const {userId} = req.params;
        await User.findByIdAndDelete(userId);
        res.status(200).json({
            status: 'Success',
            message: 'User data is deleted.'
        })
    } catch (error) {
        res.status(501).json({
            message: 'Something went wrong',
            err: error.message
        });
    }
})

module.exports = router