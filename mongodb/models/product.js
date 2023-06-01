import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    status: {type: String, require: true},
    cafe: {type: mongoose.Schema.Types.ObjectId, ref: 'Cafe'},
})

ProductSchema.set('timestamps', true)

const productModel = mongoose.model('Product', ProductSchema)

export default productModel