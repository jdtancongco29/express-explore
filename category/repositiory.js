import { db } from "../db.js";

export const getCategoryRepo = async () => {
    try {
        const query = `
            SELECT id, name
            FROM category WHERE recordStatus = 1
        `;

        const [rows] = await db.execute(query); // `rows` contains the result set
        return(rows);
    } catch (err) {
        console.log("Error: ", err.message)
        throw new Error("Something went wrong!");
        
    }
}

export const getCategoryByIdRepo = async (id) => {
    try {
        const query = `
            SELECT id, name
            FROM category WHERE id = ?
        `;

        const [rows] = await db.execute(query, [id]);
        if (rows.length === 0) {
            return null;
        }

        return(rows);
    } catch (err) {
        console.log("Error: ", err.message)
        throw new Error("Something went wrong!");
        
    }
};

export const createCategoryRepo = async (name) => {

    try {
        const query = `
            INSERT INTO category (name, updatedBy, createdBy)
            VALUES (?, ?, ?)
        `;

        const values = [
            name,
            "user",
            "user",
        ];

        const [results] = await db.execute(query, values);
        return results;
    } catch (err) {
        console.log("Error: ", err.message)
        throw new Error("Something went wrong!");
    }
}

export const updateCategoryRepo = async (id, name) => {
    try {
        const query = `
            UPDATE category SET name = ? WHERE id = ?
        `;

        const [rows] = await db.execute(query, [name, id]);
        if (rows.length === 0) {
            return null;
        }

        return(rows);
    } catch (err) {
        console.log("Error: ", err.message)
        throw new Error("Something went wrong!");
        
    }
};

export const deleteCategoryRepo = async (id) => {
    try {
        const query = `
            DELETE FROM category WHERE id = ?
        `;

        return await db.execute(query, [id]);
    } catch (err) {
        console.log("Error: ", err.message)
        throw new Error("Something went wrong!");
        
    }
};