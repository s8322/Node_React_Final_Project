const express = require("express")
const jwt = require("jsonwebtoken")
const verifyJWT=require('../middleware/verifyJWT')
const router = express.Router()
const User = require("../models/User")
const userController = require("../controllers/userController")
// router.use(verifyJWT)
router.get("/", userController.getAllUser)
router.get("/:id", userController.getUserById)
router.put("/", verifyJWT,userController.updateUser)
router.delete("/", userController.deleteUser)

module.exports = router