// Music Project Interface
export interface MusicProject {
  id: string;
  title: string;
  tempo: number;
  producer: string;
  description: string;
  tonic: string[]; // References the Tonic table (id)
  mode: string[]; // References the Mode table (id)
  notes: string[]; // References to Note dataset (id)
  clients: string[]; // References to Client dataset (id)
  file_references: string[]; // References to File dataset (id)
  web_references: string[]; // References to Web Reference dataset (id)
}

// Note Interface
export interface Note {
  id: string;
  date: string;
  headline: string;
  content: string;
}

// Client Interface
export interface Client {
  id: string;
  name: string;
  artist_name: string;
  email: string;
  website: string;
  phone: string;
}

// File Reference Interface
export interface FileReference {
  id: string;
  file_name: string;
  file_category: string; // Reference to File Category dataset (id)
}

// File Category Interface
export interface FileCategory {
  id: string;
  category: string;
}

// Web Reference Interface
export interface WebReference {
  id: string;
  title: string;
  url: string;
}

// Tonic Interface
export interface Tonic {
  id: string;
  tonic: string;
}

// Mode Interface
export interface Mode {
  id: string;
  mode: string;
}

