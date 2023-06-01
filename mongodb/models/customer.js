import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    avatar: {type: String, require: true},
    allOrders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Orders'}]
})

CustomerSchema.set('timestamps', true)

const customerModel = mongoose.model('Customer', CustomerSchema)

export default customerModel