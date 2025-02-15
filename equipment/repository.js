import { db } from "../db.js";

export const getEquipmentRepo = async () => {

    try {
        const query = 'SELECT id, name, categoryId, createdAt, updatedAt FROM equipment WHERE recordStatus = 1';

        const [rows] = await db.execute(query);
        return rows;

    } catch (err) {
        console.error("Error: ", err.message);
        throw new Error("An unexpected error occurred. Something went wrong in the db.");
    }

}

export const getEquipmentByIdRepo = async (id) => {
    try {
        const query = "SELECT id, name, categoryId, createdAt, updatedAt FROM equipment WHERE id = ?";
        const [rows] = await db.execute(query, [id]);

        return rows.length ? rows[0] : null;
    } catch (err) {
        console.error("Error fetching equipment by ID:", err.message);
        throw new Error("Something went wrong while fetching equipment.");
    }
};

export const createEquipmentRepo = async (name, categoryId) => {
    
    try {
        const query = 'INSERT INTO equipment (name, categoryId, updatedBy, createdBy) VALUES (?, ?, ?, ?)';

        const values = [
            name,
            categoryId,
            "user",
            "user"
        ];

        const [results] = await db.execute(query, values);
        return results;

    } catch (err) {
        console.error("Error: ", err.message);
        throw new Error("An unexpected error occurred. Something went wrong in the db.");
    }

}

export const updateEquipmentRepo = async (id, name, categoryId) => {
    try {
        const query = "UPDATE equipment SET name = ?, categoryId = ? WHERE id = ?";
        const [result] = await db.execute(query, [name, categoryId, id]);

        if (result.affectedRows === 0) return null;
        return { id, name, categoryId };
    } catch (err) {
        console.error("Error updating equipment:", err.message);
        throw new Error("Something went wrong while updating equipment.");
    }
};

export const deleteEquipmentRepo = async (id) => {
    try {
        const query = "DELETE FROM equipment WHERE id = ?";
        const [result] = await db.execute(query, [id]);

        if (result.affectedRows === 0) return null;

        return { message: "Equipment deleted successfully", id };
    } catch (err) {
        console.error("Error deleting equipment:", err.message);
        throw new Error("Something went wrong while deleting equipment.");
    }
};