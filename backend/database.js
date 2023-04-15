const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

async function getUsers() {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
}

async function getUser(id) {
    const [rows] = await pool.query(
    `SELECT password 
    FROM users
    WHERE uid = ?`, [id]);
    return rows[0];
}

getUsers().then(console.log);
getUser('1234567890QW').then(console.log);

module.exports = {getUser, getUsers};