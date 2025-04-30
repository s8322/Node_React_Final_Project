const mongoose = require('mongoose')
const myApartmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    apartment: {
        type: mongoose.Schema.ObjectId,
        ref: 'Apartment',
        required: true
    }
}, { timestamps: true })
module.exports = mongoose.model('MyApartment', myApartmentSchema)