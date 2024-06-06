// jest setup
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSearchParams } from "next/navigation";
// to test
import ProjectPage from '@/app/project/page';
import { getMusicProjects, getNotes, getClients, getFileReferences, getFileCategories, getWebReferences, getTonics, getModes } from '@/api/testData';

jest.mock('@/api/testData', () => ({
  getMusicProjects: jest.fn().mockResolvedValue([
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
  ]),
  getNotes: jest.fn().mockResolvedValue([
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
  ]),
  getClients: jest.fn().mockResolvedValue([
    {
      id: "3",
      name: "Client Name",
      artist_name: "Stage Name",
      email: "client@example.com",
      website: "https://clientwebsite.com",
      phone: "+123-456-7890"
    }
  ]),
  getFileReferences: jest.fn().mockResolvedValue([
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
  ]),
  getFileCategories: jest.fn().mockResolvedValue([
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
  ]),
  getWebReferences: jest.fn().mockResolvedValue([
    {
      id: "8",
      title: "Reference Video",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ]),
  getTonics: jest.fn().mockResolvedValue([
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
  ]),
  getModes: jest.fn().mockResolvedValue([
    { id: "1", mode: "Ionian" },
    { id: "2", mode: "Dorian" },
    { id: "3", mode: "Phrygian" },
    { id: "4", mode: "Lydian" },
    { id: "5", mode: "Mixolydian" },
    { id: "6", mode: "Aeolian" },
    { id: "7", mode: "Locrian" }
  ])
}));

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

const mockGet = jest.fn();
mockGet.mockReturnValue('1');

(useSearchParams as jest.Mock).mockReturnValue({
  get: mockGet,
});

it('should have Project Details', () => {
  // arrange
  render(<ProjectPage />);
  // act
  const projectDetails = screen.getByTestId('project-page');
  // assert
  expect(projectDetails).toBeInTheDocument();
});