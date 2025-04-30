const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
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
module.exports = mongoose.model('User', userSchema)