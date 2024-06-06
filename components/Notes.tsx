import React from 'react';
import styles from './Notes.module.css';

interface NotesProps {
  notes: any[];
}

const Notes: React.FC<NotesProps> = ({ notes }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.notes}>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id} className={styles.note}>
            <p>Date: {note.date}</p>
            <p>Headline: {note.headline}</p>
            <p>Content: {note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;