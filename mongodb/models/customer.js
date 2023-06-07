import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    nickName: {type: String, require: true},
    email: {type: String, require: true},
    avatar: {type: String, require: true},
    birthdate: {type: Date, require: true},
    location: {type: Date, require: true},
    address: {type: String, require: true},
    phone: {type: Number, require: true},
    favoriteDrink: {type: String, require: true},
    coffeeTime: {type: String, require: true},
    milkType: {type: String, require: true},
    coffeesPerDay: {type: Number, require: true},
    preferCompany: {type: Boolean, require: true},
    allOrders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Orders'}]
})

CustomerSchema.set('timestamps', true)

const customerModel = mongoose.model('Customer', CustomerSchema)

export default customerModel