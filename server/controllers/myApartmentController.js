const MyApartment = require("../models/MyApartments")
const createMyApartment = async (req, res) => {
    const { apartment, user } = req.body
    if (!apartment || !user) {
        return res.status(400).json({ Message: 'Apartment and user details are required fields'})
    }
    const myApartment = await MyApartment.create({ apartment, user })
    if (myApartment) {
        return res.status(201).json({ message: "The apartment has been added to your list" })
    }
    else {
        return res.status(400).json({ message: "Invalid insertion" })
    }

}
const getMyApartmentByUserId = async (req, res) => {
    const { myApartment_id } = req.body
    const myApartments = await MyApartment.find({ myApartment: myApartment_id }).sort({ name: 1 })
    .populate('address') // Populate address
    .populate('user') // Populate user from the apartment model
    .populate({
      path: 'user', // Populate the user addresses
      populate: 'address' // Populate the address in the user model
    })
      .lean();
    if (!myApartments) {
        return res.status(400).json({ message: "No apartments found" })
    }
    res.json(myApartments)
}
const getMyApartmentById = async (req, res) => {
    const { id } = req.params
    const myApartment = await MyApartment.findById(id) .populate('address') // Populate address
    .populate('user') // Populate user from the apartment model
    .populate({
      path: 'user', // Populate the user addresses
      populate: 'address' // Populate the address in the user model
    })
      .lean();
    if (!myApartment)
        return res.status(400).json({ message: "No apartments found" })
    res.json(myApartment)
}
const deleteMyApartment = async (req, res) => {
    const { _id } = req.body
    const myApartment = await MyApartment.findById(_id).exec()
    if (!myApartment) {
        return res.status(400).json({ message: "No apartment found" })
    }
    const result = await myApartment.deleteOne()
    const myApartments = await MyApartment.find().lean()
    res.json(myApartments)
}
module.exports = {
    createMyApartment,
    getMyApartmentByUserId,
    getMyApartmentById,
    deleteMyApartment
}

