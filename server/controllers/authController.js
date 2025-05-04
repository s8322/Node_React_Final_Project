const User = require('../models/User')
const bcrypt = require('bcrypt')
const { createAddress, getAllAddress, getAddressById, deleteAddress } = require("./address")
const jwt = require('jsonwebtoken')
const register = async (req, res) => {
    console.log("in register");
    const { name, email, phone, address, password } = req.body;

    // וודא שכל השדות הנדרשים נשלחים
    if (!name || !email || !password || !address) {
        return res.status(400).json({ Message: 'Missing required fields: name, email, password, or address.' });
    }

    try {
        console.log("Checking for duplicate user...");
        const duplicate = await User.findOne({ email }).lean();
        if (duplicate) {
            return res.status(409).json({ Message: 'User already exists.' });
        }

        console.log("Creating address...");
        const newAddress = await createAddress(address); // ייתכן שהבעיה כאן

        console.log("Hashing password...");
        const hashedPwd = await bcrypt.hash(password, 10);

        console.log("Creating user...");
        const userObject = { 
            name, 
            email, 
            phone, 
            address: newAddress._id.toString(), 
            password: hashedPwd 
        };

        const user = await User.create(userObject);

        if (user) {
            console.log("User created successfully.");
            return res.status(201).json({ Message: 'User successfully registered.' });
        } else {
            console.log("Failed to create user.");
            return res.status(400).json({ Message: 'Failed to register user.' });
        }
    } catch (error) {
        console.error('Error during registration:', error); // הדפס את השגיאה
        return res.status(500).json({ Message: 'Server error during registration.', error: error.message });
    }
};
const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ Message: 'Missing required fields' })
    }
    const foundUser = await User.findOne({ email }).lean()
    if (!foundUser) {
        return res.status(401).json({ Message: 'Incorrect email or password.' })
    }
    const match = await bcrypt.compare(password, foundUser.password)
    if (!match) {
        return res.status(401).json({ Message: 'Incorrect email or password.' })
    }
    const userInfo = { _id: foundUser._id, name: foundUser.name, email: foundUser.email, roles: foundUser.roles }
    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)

    res.status(200).json({ accessToken: accessToken, user: userInfo })

}

module.exports = { register, login }