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

// const updateAddress = async (address) => {
//     const { _id ,city, neighborhood, street, building } = address;

//     if (!city || !street || !building) {
//         throw new Error('Missing required address fields: city, street, or building.');
//     }
//     const updateAddress= await Address.findById(_id).exec()
//     if(!updateAddress){
//         throw new Error('updateAddress.');
        
//     }
//     try {
//         updateAddress.city=city
//         updateAddress.neighborhood=neighborhood
//         updateAddress.street=street
//         updateAddress.building=building
//         await updateAddress.save()
//         return updateAddress
//     } catch (error) {
//         console.log("error");
        
//         console.error('Error creating address:', error);
//         throw new Error('Failed to create address.');
//     }
// };

const updateAddress = async (address) => {
    const { _id, city, neighborhood, street, building } = address;

    // בדיקה אם שדות חובה חסרים
    if (!city || !street || !building) {
        throw new Error('Missing required address fields: city, street, or building.');
    }

    // בדיקה אם _id קיים
    if (!_id) {
        throw new Error('Address ID $(_id) is missing.');
    }

    // ניסיון למצוא את הכתובת לעדכון
    const existingAddress = await Address.findById(_id).exec();
    if (!existingAddress) {
        throw new Error(`Address with ID ${_id} not found.`);
    }

    try {
        // עדכון פרטי הכתובת
        existingAddress.city = city;
        existingAddress.neighborhood = neighborhood;
        existingAddress.street = street;
        existingAddress.building = building;

        // שמירת הכתובת המעודכנת
        await existingAddress.save();
        return existingAddress;
    } catch (error) {
        console.error('Error updating address:', error);
        throw new Error('Failed to update address.');
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
    updateAddress,
    deleteAddress
}

