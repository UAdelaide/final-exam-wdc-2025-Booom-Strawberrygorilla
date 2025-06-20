var express = require('express');
var mysql = require('mysql/promise');
var app = express();

app.use(express.json());

let db;

(async () => {
  try {
    // Now connect to the created database
    db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'DogWalkService'
    });

    console.log('Connected');
  } catch (err) {
    console.error('Error setting up database. Ensure Mysql is running: service mysql start', err);
  }
})();

// /api/dogs
app.get{'/api/dogs', asyns (req, res) => {
    try{
        const [rows] = await db
    }
}

}
