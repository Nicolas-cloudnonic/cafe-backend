import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    email: {type: String, require: true},
    password: {type: String, required: true},
    firstName: {type: String, require: false},
    lastName: {type: String, require: false},
    nickName: {type: String, require: false},
    avatar: {type: String, require: false},
    birthdate: {type: Date, require: false},
    location: {type: Date, require: false},
    address: {type: String, require: false},
    phone: {type: Number, require: false},
    favoriteDrink: {type: String, require: false},
    coffeeTime: {type: String, require: false},
    milkType: {type: String, require: false},
    coffeesPerDay: {type: Number, require: false},
    coffeePreference: {type: Boolean, require: false},
})

CustomerSchema.set('timestamps', true)

const customerModel = mongoose.model('Customer', CustomerSchema)

export default customerModel