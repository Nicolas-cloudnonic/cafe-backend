import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, required: true, select: false},
    avatar: {type: String, require: false},
    description: {type: String, require: false},
    coffeeProvider: {type: String, require: false},
    address: {type: String, require: false},
    location: {type: String, require: false},
})

StoreSchema.set('timestamps', true)

const storeModel = mongoose.model('Store', StoreSchema)

export default storeModel