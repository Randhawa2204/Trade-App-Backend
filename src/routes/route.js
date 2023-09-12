import express from "express";
import { getAllStocks , getStockById } from "../controller/stockController.js";

const router = express.Router()

router.get('/get/all-stocks', getAllStocks)
router.get('/get/stockbyId/:id', getStockById)

export default router