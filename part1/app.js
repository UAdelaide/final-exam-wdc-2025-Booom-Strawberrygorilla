var express = require('express');
var mysql = require('mysql/promise');
var app = express();

app.use(express.json());

let db;

(async () => {
  try {
    db = await mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'DogWalkService'
        });

        console.log
