import express from "express";
import { errorHandler, validateCategory } from './middleware.js';
import { 
    createEquipmentController,
    getEquipmentController,
    getEquipmentByIdController,
    updateEquipmentController,
    deleteEquipmentController
} from './equipment/controller.js';
import { 
    createCategoryController,
    getCategoryController,
    getCategoryByIdController,
    updateCategoryController,
    deleteCategoryController
} from './category/controller.js';

const router = express.Router();
router.use(express.json());

router.get("/equipment", getEquipmentController);
router.get("/equipment/:id", getEquipmentByIdController);
router.post("/equipment", validateCategory, createEquipmentController);
router.put("/equipment/:id", updateEquipmentController);
router.delete("/equipment/:id", deleteEquipmentController);


router.get('/category', getCategoryController);
router.get('/category/:id', getCategoryByIdController);
router.post("/category", validateCategory, createCategoryController);
router.put('/category/:id', updateCategoryController);
router.delete('/category/:id', deleteCategoryController);

router.use(errorHandler);
export default router;