const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        required: false
    },
    address: {
        type: mongoose.Schema.ObjectId,
        ref: 'Address',
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    }
}, { timestamps: true })
module.exports = mongoose.model('User', userSchema)