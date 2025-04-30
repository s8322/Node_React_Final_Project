const User = require("../models/User")
const bcrypt = require('bcrypt')
const {createAddress,getAllAddress,getAddressById,deleteAddress } = require("./address")

const getAllUser = async (req, res) => {
    const users = await User.find().sort({ name: 1 }).populate('address').lean().lean()
    if (!users) {
        return res.status(400).json({ message: 'No users found' })
    }
    res.json(users)
}
const getUserById = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id).populate('address').lean()
    console.log(user);
    // const AllAddress=getAddressById(user.address);
    // user.address=AllAddress
    if (!user)
        return res.status(400).json({ message: 'No users found' })
    res.json(user)
}
const updateUser = async (req, res) => {
    const { _id, name, email, phone, address, password, } = req.body
    if (!_id || !email|| !password)
        return res.status(400).json({ message: 'missing required fields' })
    const user = await User.findById(_id).exec()
    if (!user) {
        return res.status(400).json({ message: "User not found" })
    }
    user.name = name
    user.email = email
    user.phone = phone
    const hashedPwd = await bcrypt.hash(password, 10)
    user.password = hashedPwd
    const updatedUser = await user.save()
    const users = await User.find().lean()
    res.json(users)
}
const deleteUser = async (req, res) => {
    const { _id } = req.body
    const user = await User.findById(_id).exec()
    if (!user) {
        return res.status(400).json({ message: "User not found" })
    }
    deleteAddress(user.address.toString())

    const result = await user.deleteOne()
    const users = await User.find().lean()
    res.json(users)
}
module.exports = {
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}

