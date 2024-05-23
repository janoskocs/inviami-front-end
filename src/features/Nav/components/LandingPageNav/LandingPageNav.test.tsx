import { render, screen } from '@testing-library/react';
import LandingPageNav from '.';
import { MemoryRouter } from 'react-router-dom';

describe('LandingPageNav tests', () => {
  it('should render the navigation element', () => {
    render(
      <MemoryRouter>
        <LandingPageNav />
      </MemoryRouter>
    );
    const navigation = screen.queryByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });

  it('should render links to the landing page', () => {
    render(
      <MemoryRouter>
        <LandingPageNav />
      </MemoryRouter>
    );
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveTextContent('About');
    expect(links[1]).toHaveTextContent('Privacy');
    expect(links[2]).toHaveTextContent('Sign up');
  });

  it('about, and privacy links should have the correct hrefs', () => {
    render(
      <MemoryRouter>
        <LandingPageNav />
      </MemoryRouter>
    );
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/about');
    expect(links[1]).toHaveAttribute('href', '/privacy');
    expect(links[2]).toHaveAttribute('href', '/signup');
  });

  it('should render the log in and sign up buttons', () => {
    render(
      <MemoryRouter>
        <LandingPageNav />
      </MemoryRouter>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Log in');
  });
});
