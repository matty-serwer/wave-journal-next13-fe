import React from 'react';
import styles from './Modes.module.css';

interface ModesProps {
  modes: any[];
}

const Modes: React.FC<ModesProps> = ({ modes }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.modes}>Modes</h2>
      <ul>
        {modes.map((mode) => (
          <li key={mode.id} className={styles.mode}>
            <p>Mode: {mode.mode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Modes;