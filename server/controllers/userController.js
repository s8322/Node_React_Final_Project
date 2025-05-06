const User = require("../models/User")
const bcrypt = require('bcrypt')
const { createAddress, getAllAddress, getAddressById, deleteAddress } = require("./address")

const getAllUser = async (req, res) => {
    const users = await User.find().sort({ name: 1 }).populate('address').lean().lean()
    if (!users) {
        return res.status(400).json({ message: 'No users found' })
    }
    res.status(201).json(users)
}
const getUserById = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id).populate('address').lean()
    console.log(user);
    // const AllAddress=getAddressById(user.address);
    // user.address=AllAddress
    if (!user)
        return res.status(400).json({ message: 'No users found' })
    res.status(201).json(user)
}
const updateUser = async (req, res) => {
    const { _id } = req.user
    console.log(req.body);

    const { name, email, phone, address, password, } = req.body
    console.log(email, _id, password);

    if (!_id || !email || !password)
        return res.status(400).json({ message: 'missing required fields' })
    console.log("Checking for duplicate user...");
    const duplicate = await User.findOne({ email }).lean();
    
    if (duplicate && duplicate._id != _id) {
        return res.status(409).json({ Message: 'User already exists.' });
    }
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
    res.status(201).json(user)
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
    res.status(201).json(users)
}
module.exports = {
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}

