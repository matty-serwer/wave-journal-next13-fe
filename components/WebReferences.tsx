import React from 'react';
import styles from './WebReferences.module.css';

interface WebReferencesProps {
  webReferences: any[];
}

const WebReferences: React.FC<WebReferencesProps> = ({ webReferences }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.references}>Web References</h2>
      <ul>
        {webReferences.map((webReference) => (
          <li key={webReference.id} className={styles.reference}>
            <a href={webReference.url} target="_blank" rel="noopener noreferrer">
              {webReference.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebReferences;