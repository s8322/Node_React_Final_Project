const User = require('../models/User')
const bcrypt = require('bcrypt')
const { createAddress, getAllAddress, getAddressById, deleteAddress } = require("./address")
const jwt = require('jsonwebtoken')
const register = async (req, res) => {
    console.log("in register");
    const { name, email, phone, address, password } = req.body
    if (!name || !email || !password|| !address) {
        return res.status(400).json({ Message: 'Missing required fields' })
    }
    const newAddress = await createAddress(address);

    const duplicate = await User.findOne({ email: email }).lean()
    if (duplicate) {
        return res.status(409).json({ Message: 'Existing user' })
    }

    console.log("after checking");
    const hashedPwd = await bcrypt.hash(password, 10)
    const userObject = { name, email, phone, address: newAddress._id.toString(), password: hashedPwd }


    const user = await User.create(userObject)
    if (user) {
        return res.status(201).json({ Message: 'User successfully registered' })//עדיף לעשות כניסה תו"כ

    }
    else {

        console.log("didnt crate");

        return res.status(400).json({ Message: 'Invalid user' })
    }
}
const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ Message: 'Missing required fields' })
    }
    const foundUser = await User.findOne({ email }).lean()
    if (!foundUser) {
        return res.status(401).json({ Message: 'Incorrect email or password.' })
    }
    const match = await bcrypt.compare(password, foundUser.password)
    if (!match) {
        return res.status(401).json({ Message: 'Incorrect email or password.' })
    }
    const userInfo = { _id: foundUser._id, name: foundUser.name, email: foundUser.email, roles: foundUser.roles }
    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)

    res.status(200).json({ accessToken: accessToken, user: userInfo })

}

module.exports = { register, login }