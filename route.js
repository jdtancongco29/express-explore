import express from "express";
import { errorHandler, validateCategory } from './middleware.js';
import { createCategoryController, getCategoryController } from './category/controller.js';

const router = express.Router();
router.use(express.json());

router.get('/categories', getCategoryController);
router.post("/categories", validateCategory, createCategoryController);

router.use(errorHandler);
export default router;