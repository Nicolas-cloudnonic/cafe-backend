import express from "express";
import {createProduct, getAllProducts, getProductInfoByID} from "../controllers/product.controller.js";

const router = express.Router()

router.route('/').get(getAllProducts)
router.route('/').post(createProduct)
router.route('/:id').get(getProductInfoByID)

export default router