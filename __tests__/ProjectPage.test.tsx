// jest setup
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSearchParams } from "next/navigation";
// to test
import ProjectPage from '@/app/project/page';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

const mockGet = jest.fn();
mockGet.mockReturnValue('1');

(useSearchParams as jest.Mock).mockReturnValue({
  get: mockGet,
});

describe('should load all relevant elements', () => {
  it('should have Project Details', async () => {
    // arrange
    render(<ProjectPage />);
    // act
    const projectDetails = await screen.findByText('Enchanted Melody');
    // assert
    expect(projectDetails).toBeInTheDocument();
  });

  it('should have Clients', async () => {
    // arrange
    render(<ProjectPage />);
    // act
    const clients = await screen.findByText('Clients');
    // assert
    expect(clients).toBeInTheDocument();
  });

  it('should have File References', async () => {
    // arrange
    render(<ProjectPage />);
    // act
    const fileReferences = await screen.findByText('File References');
    // assert
    expect(fileReferences).toBeInTheDocument();
  });

  it('should have Web References', async () => {
    // arrange
    render(<ProjectPage />);
    // act
    const webReferences = await screen.findByText('Web References');
    // assert
    expect(webReferences).toBeInTheDocument();
  });

  it('should have Notes', async () => {
    // arrange
    render(<ProjectPage />);
    // act
    const notes = await screen.findByText('Notes');
    // assert
    expect(notes).toBeInTheDocument();
  });
});

describe('should match the expected data', () => {
  it('should render the correct project title', async () => {
    // arrange
    render(<ProjectPage />);
    // act
    const projectTitle = await screen.findByText('Enchanted Melody');
    // assert
    expect(projectTitle).toBeInTheDocument();
  });

  it('should render the correct client name', async () => {
    // arrange
    render(<ProjectPage />);
    // act
    const clientName = await screen.findByText(/Client Name/);
    // assert
    expect(clientName).toBeInTheDocument();
  });

  it('should render the correct project description', async () => {
    // arrange
    render(<ProjectPage />);
    // act
    const projectDescription = await screen.findByText(/A mystical music project/);
    // assert
    expect(projectDescription).toBeInTheDocument();
  });

  it('should render the correct project producer', async () => {
    // arrange
    render(<ProjectPage />);
    // act
    const projectProducer = await screen.findByText(/Jane Doe/);
    // assert
    expect(projectProducer).toBeInTheDocument();
  });

  it('should render the correct project tempo', async () => {
    // arrange
    render(<ProjectPage />);
    // act
    const projectTempo = await screen.findByText(/110/);
    // assert
    expect(projectTempo).toBeInTheDocument();
  });

  it('should render the correct project key', async () => {
    // arrange
    render(<ProjectPage />);
    // act
    const projectKey = await screen.findByText(/E Minor/);
    // assert
    expect(projectKey).toBeInTheDocument();
  });
});