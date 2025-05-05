const Apartment = require("../models/Apartment")
const User = require("../models/User")
const { createAddress, getAllAddress, getAddressById, deleteAddress, updateAddress } = require("./address")
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
    const apartments = await Apartment.find({ user: id }).populate('address')
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
// const updateApartment = async (req, res) => {
//     const userId = req.user._id
//     console.log("1");

//     const { _id, address, floor, price, description, img, size, numOfRooms, airDirections, options //  user,
//          } = req.body
//      console.log("2");
//     if (!_id || !address)
//         console.log("3");
//         return res.status(400).json({ message: 'missing required fields' })
//     const apartment = await Apartment.findById(_id).exec()
//     if (!apartment|| apartment.user!=userId) {
//         console.log("4");
//         return res.status(400).json({ message: "No apartment found for this user or you are not the user" })
//     }
//     // apartment.user = user
//     apartment.address = address
//     apartment.floor = floor
//     apartment.price = price
//     apartment.description = description
//     apartment.img = img
//     apartment.size = size
//     apartment.numOfRooms = numOfRooms
//     apartment.airDirections = airDirections
//     apartment.options = options
//     console.log("5");
//     const updatedApartment = await apartment.save()
//     console.log("6");
//     const apartments = await Apartment.find().lean()
//     console.log("7");
//     res.status(201).json(apartments)
// }
// const updateApartment = async (req, res) => {
//     try {
//         const userId = req.user._id;
//         console.log("1");

//         const { 
//             _id, address, floor, price, description, img, size, numOfRooms, airDirections, options 
//         } = req.body;

//         console.log("2");

//         // בדיקת שדות חובה
//         if (!_id || !address) {
//             console.log("3");
//             return res.status(400).json({ message: 'Missing required fields' });
//         }
//         const parsedAddress = typeof address === 'string' ? JSON.parse(address) : address;
//         const updateAddress = await updateAddress(parsedAddress);
//         if(!updateAddress){
//             return res. status(400).json({message:"unupdated address"})
//         }
//         // מציאת הדירה לפי ID
//         const apartment = await Apartment.findById(_id).exec();
//         if (!apartment || apartment.user.toString() !== userId) {
//             console.log("4");
//             return res.status(400).json({ message: "No apartment found for this user or you are not the user" });
//         }

//         // עדכון פרטי הדירה
//         apartment.address = updateAddress._id;
//         apartment.floor = floor;
//         apartment.price = price;
//         apartment.description = description;
//         apartment.img = img;
//         apartment.size = size;
//         apartment.numOfRooms = numOfRooms;
//         apartment.airDirections = airDirections;
//         apartment.options = options;

//         console.log("5");

//         // שמירת הדירה המעודכנת
//         const updatedApartment = await apartment.save();
//         if (!updatedApartment) {
//             console.log("6 - Save Failed");
//             return res.status(500).json({ message: "Failed to update apartment" });
//         }

//         console.log("6 - Save Succeeded");

//         // החזרת רשימת כל הדירות
//         const apartments = await Apartment.find().lean();
//         console.log("7");
//         res.status(201).json(apartments);

//     } catch (error) {
//         console.error("Error updating apartment:", error);
//         res.status(500).json({ message: "An error occurred while updating the apartment" });
//     }
// };

const updateApartment = async (req, res) => {
    try {
      const userId = req.user._id;
  
      const { 
        _id, address, floor, price, description, img, size, numOfRooms, airDirections, options 
      } = req.body;
  
      // בדיקת שדות חובה
      if (!_id || !address) {
        console.log("Missing required fields");
        return res.status(400).json({ message: 'Missing required fields (_id or address)' });
      }
  
      const parsedAddress = typeof address === 'string' ? JSON.parse(address) : address;
  
      // עדכון כתובת
      const updatedAddress = await updateAddress(parsedAddress);
      if (!updatedAddress) {
        return res.status(400).json({ message: "Failed to update address" });
      }
  
      // מציאת הדירה לפי ID
      const apartment = await Apartment.findById(_id).exec();
      if (!apartment || apartment.user.toString() !== userId) {
        console.log("No apartment found or unauthorized");
        return res.status(400).json({ message: "No apartment found for this user or unauthorized" });
      }
  
      // עדכון פרטי הדירה
      apartment.address = updatedAddress._id;
      apartment.floor = floor;
      apartment.price = price;
      apartment.description = description;
      apartment.img = img;
      apartment.size = size;
      apartment.numOfRooms = numOfRooms;
      apartment.airDirections = airDirections;
      apartment.options = options;

//       console.log(apartment.address,
//         apartment.floor,
//         apartment.price,
//         apartment.description,
//         apartment.img,
//         apartment.size,
//         apartment.numOfRooms,
//         apartment.airDirections,
//         apartment.options,
//   );
  
      // שמירת הדירה המעודכנת
    //   const updatedApartment = 
    await apartment.save();
      if (!apartment) {
        console.log("Failed to save updated apartment");
        return res.status(500).json({ message: "Failed to update apartment" });
      }
  
      // החזרת רשימת כל הדירות
      const apartments = await Apartment.find().lean();
      res.status(201).json({apartments:apartments, apartment:apartment});
  
    } catch (error) {
      console.error("Error updating apartment:", error);
      res.status(500).json({ message: "An error occurred while updating the apartment" });
    }
  };
const deleteApartment = async (req, res) => {
    const { _id } = req.body


    if (!_id) {
        console.log("no id")
        return res.status(400).json({ Messege: "no id" })
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

