import { render, screen, waitFor } from '@testing-library/react';
import Nav from '.';
import { MemoryRouter } from 'react-router-dom';

describe('Navigation tests', () => {
  it('should render the header element', () => {
    render(
      <MemoryRouter>
        <Nav context="landing" />
      </MemoryRouter>
    );
    const header = screen.queryByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('should render a clickable logo', () => {
    render(
      <MemoryRouter>
        <Nav context="landing" />
      </MemoryRouter>
    );
    const logo = screen.queryByAltText('Logo');
    //const anchor = screen.queryByRole('link', { name: 'TaskVillam' });

    const anchor = screen.queryByTitle('TaskVillam');
    expect(anchor).toHaveAttribute('href', '/');
    expect(logo).toBeInTheDocument();
  });

  it('should render the search input', () => {
    render(
      <MemoryRouter>
        <Nav context="landing" />
      </MemoryRouter>
    );
    const search = screen.queryByRole('searchbox');
    expect(search).toBeInTheDocument();
  });

  it('should render the landing page navigation', () => {
    render(
      <MemoryRouter>
        <Nav context="landing" />
      </MemoryRouter>
    );
    const about = screen.queryByText('About');
    const privacy = screen.queryByText('Privacy');
    const signup = screen.queryByText('Sign up');

    expect(about).toBeInTheDocument();
    expect(privacy).toBeInTheDocument();
    expect(signup).toBeInTheDocument();
  });

  it('should render the logged in navigation', async () => {
    render(
      <MemoryRouter>
        <Nav context="logged-in" />
      </MemoryRouter>
    );

    //Logged In components are lazy loaded
    await waitFor(() => {
      const profile = screen.queryByText('Profile');
      const logout = screen.queryByText('Log out');

      expect(profile).toBeInTheDocument();
      expect(logout).toBeInTheDocument();
    });
  });
});
