import express from "express";
import {createOrder, deleteOrder, updateOrder, getAllOrders, getOrderDetail} from "../controllers/order.controller.js";

const router = express.Router()

router.route('/:entity').get(getAllOrders)
router.route('/:entity/:id').get(getOrderDetail)
router.route('/:store/').post(createOrder)
router.route('/:entity/:id').patch(updateOrder)
router.route('/:entity/:id').delete(deleteOrder)

export default router