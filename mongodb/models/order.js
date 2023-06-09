import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
    status: {type: String, require: true},
    customer: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
    store: {type: mongoose.Schema.Types.ObjectId, ref: 'Store'},
})

OrderSchema.set('timestamps', true)

const orderModel = mongoose.model('Order', OrderSchema)

export default orderModel