const Address = require("../models/Address")

const createAddress = async (address) => {
    const { city, neighborhood, street, building } = address;

    if (!city || !street || !building) {
        throw new Error('Missing required address fields: city, street, or building.');
    }
    try {
        const newAddress = await Address.create({ city, neighborhood, street, building });
        return newAddress;
    } catch (error) {
        console.error('Error creating address:', error);
        throw new Error('Failed to create address.');
    }
};
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

