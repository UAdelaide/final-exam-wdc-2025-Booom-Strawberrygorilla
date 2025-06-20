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
app.get('/api/dogs', async (req, res) => {
    try{
        const [rows] = await db.execute(
            `SELECT d.name AS dog_name, d.size, u.username AS owner_username
            FROM Dogs d
            JOIN Users u ON d.owner_id = u.user_id`
        );
        res.json(rows);
    } catch (err) {
    res.status(500).json({ error: 'Failed to fetch dogs' });
  }
});

// /api/walkrequests/open
app.get('/api/walkrequests/open', async (req, res) => {
    try{
        const [rows] = await db.execute(
            `SELECT r.request, d_name AS dog_name, r.requested_time, r.duration_minutes, u.usernames AS owner_username
            FROM WalkRequests r
            JOIN Dogs d ON r.dog_id = d.dog_id
            JOIN Users u ON d.owner_id = u.user_id
            WHERE r.staus = 'open'
            `
        );
        res.json(rows);
    } catch (err) {
    res.status(500).json({ error: 'Failed to fetch walkrequests' });
  }
});

// /api/walkers/summary
app.get('/api/walkers/summary', async (req, res) => {
    try{
        const [rows] = await db.execute(
            `SELECT u.username AS walker_username,
            COUNT(r.rating_id) AS total_ratings,
            (
            SELECT COUNT(*) FROM WalkRu
            )
            `
        );
        res.json(rows);
    } catch (err) {
    res.status(500).json({ error: 'Failed to fetch walker summary' });
  }
});
