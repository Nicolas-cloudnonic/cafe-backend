import express from "express";
import {createCustomer, getAllCustomers, getCustomerInfoByID} from "../controllers/customer.controller.js";

const router = express.Router()

router.route('/').get(getAllCustomers)
router.route('/').post(createCustomer)
router.route('/:id').get(getCustomerInfoByID)

export default router