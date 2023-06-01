import mongoose from "mongoose";

const CafeSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    avatar: {type: String, require: true},
    allProducts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
    allOrders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}]
})

CafeSchema.set('timestamps', true)

const cafeModel = mongoose.model('Cafe', CafeSchema)

export default cafeModel