import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JournalEntry.css';

const JournalEntry = () => {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://localhost:3001/entries');
        setEntries(response.data.reverse()); // Reverse the order of the entries array
      } catch (err) {
        console.error(err);
      }
    };

    fetchEntries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString();
  
    try {
      await axios.post('http://localhost:3001/entries', { text: entry, timestamp });
      setEntries([{ text: entry, timestamp }, ...entries]); // Add the new entry to the beginning of the entries array
    } catch (err) {
      console.error(err);
    }
  
    setEntry('');
  };
  
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    date.setHours(date.getHours() - 4);
    return `${date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
    })} ${date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })}`;
  };
  
  return (
    <div className="journal-entry">
      <form onSubmit={handleSubmit} className="journal-entry-form">
        <textarea
          className="journal-entry-input"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write your journal entry here..."
          required
        />
        <button type="submit" className="journal-entry-submit">
          Submit
        </button>
      </form>
      <div className="journal-entry-list">
        {entries.map((entry, index) => (
          <div key={index} className="journal-entry-item">
            <p>{formatTimestamp(entry.timestamp)}</p>
            <p>{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalEntry;
