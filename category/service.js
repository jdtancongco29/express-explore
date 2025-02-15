import { 
    createCategoryRepo,
    getCategoryRepo,
    getCategoryByIdRepo, 
    updateCategoryRepo, 
    deleteCategoryRepo

} from "./repositiory.js"

export const getCategoryService = async () => {
    return getCategoryRepo();
}
export const getCategoryByIdService = async (id) => {
    return getCategoryByIdRepo(id);
};
export const createCategoryService = async (name) => {
    const result = await createCategoryRepo(name);
    return { id: result.insertId, name: name };
}
export const updateCategoryService = async (id, name) => {
    await updateCategoryRepo(id, name);
    return { id, name };
};
export const deleteCategoryService = async (id) => {
    await deleteCategoryRepo(id);
    return { message: "Category deleted successfully" };
};