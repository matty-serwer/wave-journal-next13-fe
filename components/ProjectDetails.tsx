import React from 'react';
import styles from './ProjectDetails.module.css';

interface ProjectDetailsProps {
  project: any;
  tonics: any[];
  modes: any[];
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, tonics, modes }) => {
  const key = `${tonics.map((tonic) => tonic.tonic).join(', ')} ${modes.map((mode) => mode.mode).join(', ')}`;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{project.title}</h1>
      <p className={styles.details}>Description: {project.description}</p>
      <p className={styles.details}>Producer: {project.producer}</p>
      <p className={styles.details}>Tempo: {project.tempo}</p>
      <p className={styles.details}>Key: {key}</p>
    </div>
  );
};

export default ProjectDetails;