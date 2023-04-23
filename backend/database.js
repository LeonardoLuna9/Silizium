const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

// Get users
async function getUsers() {
    try {
        const [rows] = await pool.query("SELECT * FROM users");
        return rows;
    }
    catch(error) {
        console.log(error);
    }
    
}

// Get user by id
async function getUser(id) {
    try {
        const [rows] = await pool.query(
        `SELECT * 
        FROM users
        WHERE uid = ?`, [id]);
        return rows[0];
    }
    catch(error) {
        console.log(error);
    }
}

// Set a user
async function setUser(id, password) {
    try {
        const [rows] = await pool.query(
        `INSERT INTO users(uid, password)
        VALUES(?, ?)`, [id, password]);
        return rows;
    }
    catch(error) {
        console.log(error);
    }
}

async function deleteUser(id){
    try{
        const [rows] = await pool.query(
            `UPDATE users SET role = 'inactive' WHERE uid = ?`, 
            [id]
        );
        return rows;
    }
    catch(error) {
        console.log(error);
    }
}

async function activeUser(id){
    try{
        const [rows] = await pool.query(
            `UPDATE users SET role = 'manager' WHERE uid = ?`,
            [id]
        );
        return rows;
    }
    catch(error){
        console.log(error);
    }
}




//getUsers().then(console.log);
//getUser('1234567890QW').then(console.log);

module.exports = {getUser, getUsers, setUser, deleteUser, activeUser};