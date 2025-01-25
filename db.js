import mysql from 'mysql2/promise';

// Create a MySQL connection
export const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb',
});

try {
    console.log('Connected to MySQL database');

    // Check and create tables
    await checkAndCreateTables();
} catch (err) {
    console.error('Error connecting to MySQL:', err.message);
    process.exit(1); // Exit the process on failure
}

// Function to check and create tables
async function checkAndCreateTables() {
    try {
        // Query to create 'category' table if it doesn't exist
        const categoryTableQuery = `
            CREATE TABLE IF NOT EXISTS category (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                recordStatus INT DEFAULT 1,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedBy VARCHAR(255),
                createdBy VARCHAR(255)
            )
        `;

        // Query to create 'equipment' table if it doesn't exist
        const equipmentTableQuery = `
            CREATE TABLE IF NOT EXISTS equipment (
                id INT AUTO_INCREMENT PRIMARY KEY,
                categoryId INT,
                name VARCHAR(255) NOT NULL,
                recordStatus INT DEFAULT 1,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedBy VARCHAR(255),
                createdBy VARCHAR(255)
            )
        `;

        // Create 'category' table
        await db.execute(categoryTableQuery);
        console.log('"Category" table checked/created successfully');

        // Create 'equipment' table
        await db.execute(equipmentTableQuery);
        console.log('"Equipment" table checked/created successfully');
    } catch (err) {
        console.error('Error creating tables:', err.message);
        throw err; // Rethrow the error for better error handling
    }
}
