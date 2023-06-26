import express from "express";
import {
    createProduct, deleteProduct,
    getAllProducts,
    getProductDetail, updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router()

router.route('/:store').get(getAllProducts)
router.route('/:store/:id').get(getProductDetail)
router.route('/:store').post(createProduct)
router.route('/:store/:id').patch(updateProduct)
router.route('/:store/:id').delete(deleteProduct)


export default router