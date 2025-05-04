const Apartment = require("../models/Apartment")
const User = require("../models/User")
const { createAddress, getAllAddress, getAddressById, deleteAddress } = require("./address")
const mongoose = require('mongoose');

const createApartment = async (req, res) => {
    const { user, address, floor, price, description, size, numOfRooms, airDirections, options } = req.body;

    if (!user || !address) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const parsedAddress = typeof address === 'string' ? JSON.parse(address) : address;
    const newAddress = await createAddress(parsedAddress);

    const img = req.files?.map(file => `http://localhost:8000/uploads/${file.filename}`); // מייצר URL לכל תמונה

    const apartment = await Apartment.create({
        user,
        address: newAddress._id,
        floor,
        price,
        description,
        img,
        size,
        numOfRooms,
        airDirections,
        options,
        permission: false
    });

    if (apartment) {
        return res.status(201).json({ message: "The apartment has been added" });
    } else {
        return res.status(400).json({ message: "Invalid insertion" });
    }
};

const getAllApartment = async (req, res) => {
    const apartments = await Apartment.find().sort({ title: 1 })
        .populate('address') // Populate address
        .populate('user') // Populate user from the apartment model
        .populate({
            path: 'user', // Populate the user addresses
            populate: 'address' // Populate the address in the user model
        })
        .lean();
    //     console.log(apartments.user);
    //     const user = await User.findById(apartments.user).populate('address').lean()
    // console.log(user);
    if (!apartments) {
        return res.status(400).json({ message: "No apartments found" })
    }
    res.json(apartments)
}
const getApartmentById = async (req, res) => {
    const { id } = req.params
    const apartment = await Apartment.findById(id).populate('address') // Populate address
        .populate('user') // Populate user from the apartment model
        .populate({
            path: 'user', // Populate the user addresses
            populate: 'address' // Populate the address in the user model
        })
        .lean();
    if (!apartment)
        return res.status(400).json({ message: "No apartment found" })
    res.json(apartment)
}
const getApartmentsByUserId = async (req, res) => {
    
    const { id } = req.params
    const apartments = await Apartment.find({user:id})
        .lean();
    if (!apartments)
        return res.status(400).json({ message: "No apartment found" })
    res.json(apartments)
}

const updatePermission = async (req, res) => {
    const { _id } = req.body
    if (!_id)
        return res.status(400).json({ message: "id is required" })
    const apartment = await Apartment.findById(_id).exec()
    if (!apartment) {
        return res.status(400).json({ message: "apartment not found" })
    }
    apartment.permission = !apartment.permission
    const updatedApartment = await apartment.save()
    const apartments = await Apartment.find().lean()
    res.json(apartments)
}
const updateApartment = async (req, res) => {
    const { _id, user, address, floor, price, description, img, size, numOfRooms, airDirections, options } = req.body
    if (!_id || !user || !address)
        return res.status(400).json({ message: 'missing required fields' })
    const apartment = await Apartment.findById(_id).exec()
    if (!apartment) {
        return res.status(400).json({ message: "No apartment found for this user" })
    }
    apartment.user = user
    apartment.address = address
    apartment.floor = floor
    apartment.price = price
    apartment.description = description
    apartment.img = img
    apartment.size = size
    apartment.numOfRooms = numOfRooms
    apartment.airDirections = airDirections
    apartment.options = options
    const updatedApartment = await apartment.save()
    const apartments = await Apartment.find().lean()
    res.json(apartments)
}
const deleteApartment = async (req, res) => {
    const { _id } = req.body

    
    if(!_id){
        console.log("no id")
        return res.status(400).json({Messege: "no id"})
    }
    const apartment = await Apartment.findById(_id).exec()
    deleteAddress(apartment.address.toString())
    if (!apartment) {
        return res.status(400).json({ message: "No apartments found" })
    }
    const result = await apartment.deleteOne()
    const apartments = await Apartment.find().lean()
    res.json(apartments)
}
module.exports = {
    createApartment,
    getAllApartment,
    getApartmentById,
    getApartmentsByUserId,
    updatePermission,
    updateApartment,
    deleteApartment
}

