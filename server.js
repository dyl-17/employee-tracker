const express = require('express');
const mysql = require('mysql12');

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employees'
    },
    console.log('connected to the employees database')
);