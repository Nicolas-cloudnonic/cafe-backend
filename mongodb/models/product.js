import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    status: {type: String, require: true},
    store: {type: mongoose.Schema.Types.ObjectId, ref: 'Store'},
})

ProductSchema.set('timestamps', true)

const productModel = mongoose.model('Product', ProductSchema)

export default productModel