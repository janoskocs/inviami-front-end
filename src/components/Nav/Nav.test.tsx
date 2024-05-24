import { render } from '@testing-library/react';
import Nav from '@/components/Nav';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('nav tests', () => {
  it('should render the nav component', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    const navElement = screen.getByTestId('nav');

    expect(navElement).toBeInTheDocument();
  });

  it('should render the nav component with the correct links', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    const shopLink = screen.getByRole('link', { name: 'Shop' });
    const templatesLink = screen.getByRole('link', { name: 'Templates' });
    const privacyLink = screen.getByRole('link', { name: 'Privacy' });
    const adminLink = screen.getByRole('link', { name: 'Event Admin' });

    expect(shopLink).toBeInTheDocument();
    expect(templatesLink).toBeInTheDocument();
    expect(privacyLink).toBeInTheDocument();
    expect(adminLink).toBeInTheDocument();
  });
});
