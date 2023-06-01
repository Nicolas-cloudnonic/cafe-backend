import express from "express";
import {createCafe, getAllCafes, getCafeInfoByID} from "../controllers/cafe.controller.js";

const router = express.Router()

router.route('/').get(getAllCafes)
router.route('/').post(createCafe)
router.route('/:id').get(getCafeInfoByID)

export default router