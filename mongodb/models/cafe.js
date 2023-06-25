import mongoose from "mongoose";

const CafeSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, required: true},
    avatar: {type: String, require: false},
    description: {type: String, require: false},
    coffeeProvider: {type: String, require: false},
    address: {type: String, require: false},
    location: {type: String, require: false},
    allProducts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
    allOrders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}]
})

CafeSchema.set('timestamps', true)

const cafeModel = mongoose.model('Cafe', CafeSchema)

export default cafeModel