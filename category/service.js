import { createCategoryRepo, getCategoryRepo } from "./repositiory.js"

export const getCategoryService = async () => {
    return getCategoryRepo();
}
export const createCategoryService = async (name) => {
    const result = await createCategoryRepo(name);
    return result;
}