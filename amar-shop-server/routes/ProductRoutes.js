import express from "express";
import formidable from 'express-formidable'
import {isAddmin, requireSignIn} from "../middleWares/authMiddleware.js";
import {
    createProduct, deleteProductController,
    getProductContrller,
    getProductPhoto,
    getSingleProductController, updateProductController
} from "../controllers/ProductController.js";

const router = express.Router()

// create product ------>>>
router.post("/create-product", requireSignIn, isAddmin, formidable(), createProduct)

// update product ----->>>>
router.put("/update-product/:pid", requireSignIn,isAddmin ,formidable(), updateProductController)


// get find All Product ----------->>>
router.get('/get-product', getProductContrller);

// get single product find -------->>>>
router.get("/single-product/:slug", getSingleProductController);

// get product photo ---------->>>
router.get("/product-photo/:pid", getProductPhoto)

// delete proudct ----->>>>
router.delete('/delete-product/:pid', deleteProductController)



export default router