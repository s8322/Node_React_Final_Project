const Address = require("../models/Address")

const createAddress = async (address) => {
    const { city, neighborhood, street, building } = address;

    if (!city || !street || !building) {
        return 'missing required fields'
    }
    const address1 = await Address.create({ city, neighborhood, street, building })
    if (address1) {
        return address1
    }
    else {
        return "didn't succeeded";
    }

}
const deleteAddress = async (address) => {
    const address1 = await Address.findById(address).exec()
    if (!address1) {
        return "didn't succeeded";
    }
    const result = await address1.deleteOne()
    const addresss = await Address.find().lean()
    return addresss
}
module.exports = {
    createAddress,

    deleteAddress
}

