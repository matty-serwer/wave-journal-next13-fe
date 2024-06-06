'use client'

import { NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './project.module.css';
import {
  getMusicProjects,
  getNotes,
  getClients,
  getFileReferences,
  getFileCategories,
  getWebReferences,
  getTonics,
  getModes,
} from '@/api/testData';
import ProjectDetails from '@/components/ProjectDetails';
import Clients from '@/components/Clients';
import FileReferences from '@/components/FileReferences';
import WebReferences from '@/components/WebReferences';
import Tonics from '@/components/Tonics';
import Modes from '@/components/Modes';
import Notes from '@/components/Notes';

const ProjectPage: NextPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [project, setProject] = useState<any>({});
  const [notes, setNotes] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [fileReferences, setFileReferences] = useState<any[]>([]);
  const [fileCategories, setFileCategories] = useState<any[]>([]);
  const [webReferences, setWebReferences] = useState<any[]>([]);
  const [tonics, setTonics] = useState<any[]>([]);
  const [modes, setModes] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const musicProjects = await getMusicProjects();
      const project = musicProjects.find((project) => project.id === id);
      setProject(project);

      if (project) {
        const notesData = await getNotes();
        const projectNotes = notesData.filter((note) => project.notes.includes(note.id));
        setNotes(projectNotes);

        const clientsData = await getClients();
        const projectClients = clientsData.filter((client) => project.clients.includes(client.id));
        setClients(projectClients);

        const fileReferencesData = await getFileReferences();
        const projectFileReferences = fileReferencesData.filter((fileReference) => project.file_references.includes(fileReference.id));
        setFileReferences(projectFileReferences);

        const fileCategoriesData = await getFileCategories();
        setFileCategories(fileCategoriesData);

        const webReferencesData = await getWebReferences();
        const projectWebReferences = webReferencesData.filter((webReference) => project.web_references.includes(webReference.id));
        setWebReferences(projectWebReferences);

        const tonicsData = await getTonics();
        const projectTonics = tonicsData.filter((tonic) => project.tonic.includes(tonic.id));
        setTonics(projectTonics);

        const modesData = await getModes();
        const projectModes = modesData.filter((mode) => project.mode.includes(mode.id));
        setModes(projectModes);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className={styles.container} data-testid="project-page">
      <ProjectDetails project={project} tonics={tonics} modes={modes} data-testid="project-details"/>

      <Clients clients={clients} data-testid="clients"/>

      <div className={styles.row} data-testid="row">
        <div className={styles.column} data-testid="file-references-column">
          <FileReferences fileReferences={fileReferences} fileCategories={fileCategories}
                          data-testid="file-references"/>
        </div>
        <div className={styles.column} data-testid="web-references-column">
          <WebReferences webReferences={webReferences} data-testid="web-references"/>
        </div>
      </div>
      <Notes notes={notes} data-testid="notes"/>
    </div>
  );
}
export default ProjectPage;