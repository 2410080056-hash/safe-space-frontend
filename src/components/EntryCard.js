// src/components/EntryCard.js
import React from 'react';
import './EntryCard.css';

const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toLocaleString();

  return (
    <div className="entry-card">
      <p className="entry-date">{date}</p>
      <p className="entry-content">{entry.content}</p>
      {entry.tags?.length > 0 && (
        <div className="entry-tags">
          {entry.tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default EntryCard;