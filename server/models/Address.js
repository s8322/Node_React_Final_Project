const mongoose = require('mongoose')
const addressSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    neighborhood: {
        type: String,
        required: false,
    },
    street: {
        type: String,
        required: true
    },
    building: {
        type: String,
        required: true
    }
}, { timestamps: true })
module.exports = mongoose.model('Address', addressSchema)  