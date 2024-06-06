import React from 'react';
import styles from './FileReferences.module.css';

interface FileReferencesProps {
  fileReferences: any[];
  fileCategories: any[];
}

const FileReferences: React.FC<FileReferencesProps> = ({ fileReferences, fileCategories }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.references}>File References</h2>
      <ul>
        {fileReferences.map((fileReference) => (
          <li key={fileReference.id} className={styles.reference}>
            <p>File Name: {fileReference.file_name}</p>
            <p>Category: {fileCategories.find((category) => category.id === fileReference.file_category) && fileCategories.find((category) => category.id === fileReference.file_category).category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileReferences;