import express from "express";
import {isAddmin, requireSignIn} from "../middleWares/authMiddleware.js";
import {
    allCategoryController,
    CreateCategory, deleteCategory,
    singleCategory,
    updateCategoryController
} from "../controllers/CategoryController.js";

const router = express.Router();

// --->>>   Creater Category
router.post("/create-category", requireSignIn, isAddmin, CreateCategory);

// -------->>> update category
router.put('/update-category/:id', requireSignIn, isAddmin, updateCategoryController);

// ----------->> >get all cetagorys
router.get('/all-categories', allCategoryController);

// single Category router
router.get("/single-category/:slug", singleCategory);

// deleted category
router.delete('/deleted-category/:id', requireSignIn, isAddmin , deleteCategory);


export default router