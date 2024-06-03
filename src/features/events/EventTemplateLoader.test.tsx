import { render, waitFor, screen } from '@testing-library/react';
import { MockedFunction } from 'vitest';
import EventTemplateLoader from '.';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

const response = {
  data: {
    age: 0,
    description: "I'd love to invite you to my birthday party! ❤️",
    eventDateTime: '2024-04-30T19:00:00.000Z',
    eventName: "Jane's 28th Birthday Party",
    invitationTemplate: 'birthday-1',
    link: 'janes-28th-birthday-party',
    location: 'My place',
    occasionTitle: 'Birthday Celebrations!',
  },
};

vi.mock('axios', () => {
  return {
    default: {
      post: vi.fn(),
      get: vi.fn(),
      delete: vi.fn(),
      put: vi.fn(),
      create: vi.fn().mockReturnThis(),
      interceptors: {
        request: {
          use: vi.fn(),
          eject: vi.fn(),
        },
        response: {
          use: vi.fn(),
          eject: vi.fn(),
        },
      },
    },
  };
});

describe('EventTemplateLoader tests', () => {
  it('renders template after succesful fetch', async () => {
    (axios.get as MockedFunction<typeof axios.get>).mockResolvedValue(response);
    render(
      <MemoryRouter>
        <EventTemplateLoader />
      </MemoryRouter>
    );
    await waitFor(() =>
      expect(screen.getByText(/Birthday1/i)).toBeInTheDocument()
    );
  });

  it('renders NotFound component after failed fetch', async () => {
    (axios.get as MockedFunction<typeof axios.get>).mockRejectedValue(
      new Error()
    );
    render(
      <MemoryRouter>
        <EventTemplateLoader />
      </MemoryRouter>
    );
    await waitFor(() => expect(screen.getByText(/404/i)).toBeInTheDocument());
  });

  it('renders Spinner component while fetching', async () => {
    (axios.get as MockedFunction<typeof axios.get>).mockImplementation(() => {
      return new Promise(() => {});
    });
    render(
      <MemoryRouter>
        <EventTemplateLoader />
      </MemoryRouter>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders NotFound component when templateId is null', async () => {
    (axios.get as MockedFunction<typeof axios.get>).mockResolvedValue({
      data: {
        invitationTemplate: null,
      },
    });
    render(
      <MemoryRouter>
        <EventTemplateLoader />
      </MemoryRouter>
    );
    await waitFor(() => expect(screen.getByText(/404/i)).toBeInTheDocument());
  });

  it('renders NotFound component when templateId is not in componentMap', async () => {
    (axios.get as MockedFunction<typeof axios.get>).mockResolvedValue({
      data: {
        invitationTemplate: 'invalid-template',
      },
    });
    render(
      <MemoryRouter>
        <EventTemplateLoader />
      </MemoryRouter>
    );
    await waitFor(() => expect(screen.getByText(/404/i)).toBeInTheDocument());
  });
});
