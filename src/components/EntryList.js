// src/components/EntryList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EntryCard from './EntryCard';

const EntryList = () => {
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    const res = await axios.get('https://safe-space-app.onrender.com');
    setEntries(res.data.reverse());
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div>
      {entries.map(entry => (
        <EntryCard key={entry._id} entry={entry} />
      ))}
    </div>
  );
};

export default EntryList;