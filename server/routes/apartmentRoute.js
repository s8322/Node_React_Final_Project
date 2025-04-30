const express = require("express")
const jwt = require("jsonwebtoken")
const verifyJWT=require('../middleware/verifyJWT')
const router = express.Router()
const Apartment = require("../models/Apartment")
const apartmentController = require("../controllers/apartmentController")
// router.use(verifyJWT)
router.post("/", verifyJWT,apartmentController.createApartment)
router.get("/", apartmentController.getAllApartment)
router.get("/:id", apartmentController.getApartmentById)
router.get("/userid/:id", apartmentController.getApartmentsByUserId)

router.put("/perm", apartmentController.updatePermission)

router.put("/",verifyJWT, apartmentController.updateApartment)
router.delete("/", apartmentController.deleteApartment)


module.exports = router