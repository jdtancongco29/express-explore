import { 
    createCategoryService, 
    getCategoryService, 
    getCategoryByIdService,
    updateCategoryService, 
    deleteCategoryService 
 } from "./service.js";

export const getCategoryController = async (req, res) => {
    
    try {
        const categories = await getCategoryService();

        res.status(200).json({
            message: "Categories Fetched Succesfully",
            generatedAt: Date.now(),
            data: categories,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

export const getCategoryByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await getCategoryByIdService(id);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({
            message: "Category Fetched Successfully",
            generatedAt: Date.now(),
            data: category,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const result = await createCategoryService(name);

        res.status(200).json({
            message: "Categories Created Succesfully",
            generatedAt: Date.now(),
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

export const updateCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedCategory = await updateCategoryService(id, name);
        res.status(200).json({
            message: "Category updated successfully",
            generatedAt: Date.now(),
            data: updatedCategory,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteCategoryService(id);
        res.status(200).json({
            message: "Category deleted successfully",
            generatedAt: Date.now()
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};