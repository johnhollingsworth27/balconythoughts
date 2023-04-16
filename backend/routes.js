const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/entries', (req, res) => {
  const { text, timestamp } = req.body;
  const query = 'INSERT INTO entries (text, timestamp) VALUES (?, ?)';
  db.query(query, [text, timestamp], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Journal entry added successfully!' });
  });
});

router.get('/entries', (req, res) => {
  const query = 'SELECT * FROM entries';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;