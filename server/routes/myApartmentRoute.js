const express = require("express")
const jwt = require("jsonwebtoken")
const verifyJWT=require('../middleware/verifyJWT')
const router = express.Router()
const MyApartment = require("../models/MyApartments")
const myApartmentController = require("../controllers/myApartmentController")
// router.use(verifyJWT)
router.post("/", verifyJWT,myApartmentController.createMyApartment)
router.get("/",myApartmentController.getMyApartmentByUserId)
router.get("/:id", myApartmentController.getMyApartmentById)
router.delete("/", myApartmentController.deleteMyApartment)

module.exports = router