const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'john',
  password: 'Jmjsc0510427$',
  database: 'journal',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/entries', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM entries');
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while fetching entries' });
  }
});

app.post('/entries', async (req, res) => {
    const entryText = req.body.text;
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    if (!entryText) {
      res.status(400).send({ error: 'Text cannot be empty or null' });
      return;
    }
    const sql = 'INSERT INTO entries (text, timestamp) VALUES (?, ?)';
    try {
      await pool.query(sql, [entryText, timestamp]);
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'An error occurred while saving the entry' });
    }
  });  

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
