import { 
    createEquipmentRepo,
    getEquipmentRepo,
    getEquipmentByIdRepo,
    updateEquipmentRepo,
    deleteEquipmentRepo
} from "./repository.js"

export const getEquipmentService = async () => {
    return getEquipmentRepo();
}

export const getEquipmentByIdService = async (id) => {
    return getEquipmentByIdRepo(id);
};

export const createEquipmentService = async (name, categoryId) => {
    const result = await createEquipmentRepo(name, categoryId);
    return { id: result.insertId, name: name, categoryId: categoryId };
}

export const updateEquipmentService = async (id, name, categoryId) => {
    return await updateEquipmentRepo(id, name, categoryId);
};

export const deleteEquipmentService = async (id) => {
    return await deleteEquipmentRepo(id);
};