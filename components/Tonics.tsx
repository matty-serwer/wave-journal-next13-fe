import React from 'react';
import styles from './Tonics.module.css';

interface TonicsProps {
  tonics: any[];
}

const Tonics: React.FC<TonicsProps> = ({ tonics }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.tonics}>Tonics</h2>
      <ul>
        {tonics.map((tonic) => (
          <li key={tonic.id} className={styles.tonic}>
            <p>Tonic: {tonic.tonic}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tonics;