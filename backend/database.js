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

async function activeUser(id, password){
    try{
        const [rows] = await pool.query(
            `UPDATE users SET password = ?, role = 'manager' WHERE uid = ?`,
            [password, id]
        );
        return rows;
    }
    catch(error){
        console.log(error);
    }
}

async function search(searchText){
    try {
        const [rows] = await pool.query(
            `SELECT employees.uid AS id, name, org, work_location, certification, issue_date, type 
            FROM employees INNER JOIN certifications 
            ON employees.uid = certifications.uid 
            WHERE employees.uid LIKE ? 
            OR name LIKE ? 
            OR org LIKE ? 
            OR work_location LIKE ? 
            OR certification LIKE ? 
            OR issue_date LIKE ? 
            OR type LIKE ?`,
            [searchText, searchText, searchText, searchText, searchText, searchText, searchText]
        );
        return rows;
    }
    catch(error){
        console.log(error);
    }
}

async function saveKey(id, secret, qrurl, verified) {
    try {
        const [rows] = await pool.query(
            `UPDATE users SET secret = ?, qrurl = ?, verified = ? WHERE uid = ?`,
            [secret, qrurl, verified, id]
        );
        return rows;
    }
    catch(error) {
        console.log(error);
    }
}

async function checkKey(id) {
    try {
        const [rows] = await pool.query(
        `SELECT secret, qrurl, verified 
        FROM users
        WHERE uid = ?`, [id]);
        return rows[0];
    }
    catch(error) {
        console.log(error);
    }
}


//getUsers().then(console.log);
//getUser('1234567890QW').then(console.log);

module.exports = {getUser, getUsers, setUser, deleteUser, activeUser, search, saveKey, checkKey};