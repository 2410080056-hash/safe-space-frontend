// src/components/JournalForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './JournalForm.css';

const JournalForm = ({ onEntrySaved }) => {
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/journal', {
        content,
        tags: tags.split(',').map(tag => tag.trim())
      });
      setContent('');
      setTags('');
      onEntrySaved(); // refresh list
    } catch (err) {
      console.error(err);
      alert('Failed to save entry');
    }
  };

  return (
    <form className="journal-form" onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write freely..."
        rows={8}
      />
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (optional, comma-separated)"
      />
      <button type="submit">Save Entry</button>
    </form>
  );
};

export default JournalForm;