import express from "express";
import {createStore, deleteStore, getAllStores, getStoreDetail, updateStore} from "../controllers/store.controller.js";

const router = express.Router()

router.route('/').get(getAllStores)
router.route('/:id').get(getStoreDetail)
router.route('/').post(createStore)
router.route('/:id').patch(updateStore)
router.route('/:id').delete(deleteStore)

export default router