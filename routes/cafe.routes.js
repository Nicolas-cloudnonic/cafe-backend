import express from "express";
import {createCafe, deleteCafe, getAllCafes, getCafeDetail, updateCafe} from "../controllers/cafe.controller.js";

const router = express.Router()

router.route('/').get(getAllCafes)
router.route('/:id').get(getCafeDetail)
router.route('/').post(createCafe)
router.route('/:id').patch(updateCafe)
router.route('/:id').delete(deleteCafe)

export default router