import express from "express";
import { getProducts, getProduct, updateProduct, deleteProduct, createProduct } from "../controllers/product.controller.js";
const router = express.Router();

router.get('/', getProducts); // This is a route that will be used to get all products from the database
router.get('/:id', getProduct); // This is a route that will be used to get all products from the database
router.put('/:id', updateProduct); // This is a route that will be used to get all products from the database
router.delete(':id', deleteProduct); // This is a route that will be used to get all products from the database
router.post('/', createProduct); // This is a route that will be used to get all products from the database

export default router;
