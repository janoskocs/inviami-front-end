import { screen, render } from '@testing-library/react';
import Hero from '.';
import { MemoryRouter } from 'react-router-dom';

describe('hero tests', () => {
  it('should render the hero component', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const hero = screen.getByRole('heading', {
      name: 'Digital invitations with live RSVP',
    });

    expect(hero).toBeInTheDocument();

    expect(hero).toHaveTextContent('Digital invitations with live RSVP');
  });

  it('should render a get started link', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const getStartedLink = screen.getByRole('link', { name: /get started/i });

    expect(getStartedLink).toBeInTheDocument();

    expect(getStartedLink).toHaveAttribute('href', 'https://inviami.etsy.com');
  });

  it('should render a mockup image', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const mockupImage = screen.getByRole('img', { name: /hero/i });

    expect(mockupImage).toBeInTheDocument();

    expect(mockupImage).toHaveAttribute('src', '/hero.png');
  });

  it('should render a description', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const description = screen.getByText(
      'Create beautiful digital invitations and track RSVPs in real-time. Share your event with friends and family.'
    );

    expect(description).toBeInTheDocument();

    expect(description).toHaveTextContent(
      'Create beautiful digital invitations and track RSVPs in real-time. Share your event with friends and family.'
    );
  });

  it('should render a check it out on etsy text', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    const checkItOut = screen.getByText(/check it out on etsy/i);

    expect(checkItOut).toBeInTheDocument();

    expect(checkItOut).toHaveTextContent('Check it out on Etsy');
  });
});
