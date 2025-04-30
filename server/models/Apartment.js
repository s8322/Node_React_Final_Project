const mongoose = require('mongoose')
const apartmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    address: {
        type: mongoose.Schema.ObjectId,
        ref: 'Address',
        required: true
    },
    floor: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    description:{
        type: String,
        required: false
    },
    img: {
        type: [String],
        required: false
    },
    size: {
        type: Number,
        required: false
    },
    numOfRooms:{
        type: Number,
        required: false
    },
    airDirections: {
        type: String,
        enum:["0","1","2","3","4"],
        required: false
    },
    options:{
        type: [String],
        required: false
    },

    permission:{

        type: Boolean
    }
}, { timestamps: true })
module.exports = mongoose.model('Apartment', apartmentSchema)
