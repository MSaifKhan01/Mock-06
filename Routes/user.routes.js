const express = require('express');
const { userModel } = require('../Model/user.model');
const UserRouter = express.Router()
UserRouter.post("/register", async (req, res) => {
    try {
        const { username, email } = req.body
        const isUserPresent = await userModel.findOne({ email })
        if (isUserPresent) {
            return res.status(200).send({ msg: "User is Already Present" })
        }
        const newuserdata = new userModel({ username, email })
        await newuserdata.save()
        res.status(200).send({ msg: "Registration Succesfull", ok: true, user: newuserdata })


    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
})
module.exports = { UserRouter }