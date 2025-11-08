// src/pages/Home.js
import React, { useState } from 'react';
import JournalForm from '../components/JournalForm';
import EntryList from '../components/EntryList';

const Home = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div style={{ 
      backgroundColor: '#ffe772',
      minHeight: '100vh',
      padding: '20px',
      color: '#ffffff'
    }}>
      <h1 style={{ color: '#ff0056' }}>Safe Space</h1>
      <JournalForm onEntrySaved={() => setRefresh(!refresh)} />
      <EntryList key={refresh} />
    </div>
  );
};

export default Home;