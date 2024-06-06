import {MusicProject, Client, Mode, Note, Tonic, FileReference, WebReference, FileCategory  } from "@/types/projectTypes";


const musicProjects: MusicProject[] = [
  {
    id: "1",
    title: "Enchanted Melody",
    tempo: 110,
    producer: "Jane Doe",
    description: "A mystical music project",
    tonic: ["5"],
    mode: ["2"],
    notes: ["1", "3"],
    clients: ["3"],
    file_references: ["4", "6"],
    web_references: ["8"]
  }
];

const notes: Note[] = [
  {
    id: "1",
    date: "2023-07-28",
    headline: "Project Overview",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ultricies ex, vel lacinia dolor. Nullam ut viverra enim."
  },
  {
    id: "2",
    date: "2023-08-02",
    headline: "Midi Composition",
    content: "Added some new midi melodies and arrangements."
  }
];

const clients: Client[] = [
  {
    id: "3",
    name: "Client Name",
    artist_name: "Stage Name",
    email: "client@example.com",
    website: "https://clientwebsite.com",
    phone: "+123-456-7890"
  }
];

const fileReferences: FileReference[] = [
  {
    id: "4",
    file_name: "kick_drum_1.wav",
    file_category: "1"
  },
  {
    id: "5",
    file_name: "piano_loop.midi",
    file_category: "4"
  },
  {
    id: "6",
    file_name: "guitar_sample.aif",
    file_category: "3"
  }
];

const fileCategories: FileCategory[] = [
  {
    id: "1",
    category: "Ableton Live"
  },
  {
    id: "2",
    category: "Logic Pro"
  },
  {
    id: "3",
    category: "Sample"
  },
  {
    id: "4",
    category: "MIDI"
  },
  {
    id: "5",
    category: "Luna"
  }
];

const webReferences: WebReference[] = [
  {
    id: "8",
    title: "Reference Video",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

const tonics: Tonic[] = [
  { id: "1", tonic: "C" },
  { id: "2", tonic: "C#/Db" },
  { id: "3", tonic: "D" },
  { id: "4", tonic: "D#/Eb" },
  { id: "5", tonic: "E" },
  { id: "6", tonic: "F" },
  { id: "7", tonic: "F#/Gb" },
  { id: "8", tonic: "G" },
  { id: "9", tonic: "G#/Ab" },
  { id: "10", tonic: "A" },
  { id: "11", tonic: "A#/Bb" },
  { id: "12", tonic: "B" }
];

const modes: Mode[] = [
  { id: "1", mode: "Major" },
  { id: "2", mode: "Minor" },
  { id: "3", mode: "Dorian" },
  { id: "4", mode: "Phrygian" },
  { id: "5", mode: "Lydian" },
  { id: "6", mode: "Mixolydian" },
  { id: "7", mode: "Aeolian (Natural Minor)" },
  { id: "8", mode: "Locrian" }
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getMusicProjects(): Promise<MusicProject[]> {
  await delay(100);
  return musicProjects;
}

export async function getNotes(): Promise<Note[]> {
  await delay(100);
  return notes;
}

export async function getClients(): Promise<Client[]> {
  await delay(100);
  return clients;
}

export async function getFileReferences(): Promise<FileReference[]> {;
  await delay(100);  return fileReferences;
}

export async function getFileCategories(): Promise<FileCategory[]> {
  await delay(100);
  return fileCategories;
}
export async function getWebReferences(): Promise<WebReference[]> {
  await delay(100);
  return webReferences;
}

export async function getTonics(): Promise<Tonic[]> {
  await delay(100);
  return tonics;
}

export async function getModes(): Promise<Mode[]> {;
  await delay(100);
  return modes;
}