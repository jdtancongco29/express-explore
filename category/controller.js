import { createCategoryService, getCategoryService } from "./service.js";

export const getCategoryController = async (req, res) => {
    
    try {
        const categories = await getCategoryService();

        res.status(200).json({
            message: "Categories Created Succesfully",
            generatedAt: Date.now(),
            data: categories,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}
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