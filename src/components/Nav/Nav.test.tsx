import { render, screen, fireEvent } from '@testing-library/react';
import Nav from '@/components/Nav';
import { MemoryRouter } from 'react-router-dom';

describe('nav tests', () => {
  it('should render the nav component', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    const navElement = screen.getByRole('navigation', {
      name: 'main navigation',
    });

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

  it('should reveal the nav links when the menu button is clicked in mobile', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    const menuButton = screen.getByRole('button', { name: /open main menu/i });
    const mobileMenu = screen.getByTestId('mobile-menu');

    expect(menuButton).toBeInTheDocument();

    expect(mobileMenu).toHaveClass('hidden');

    fireEvent.click(menuButton);

    expect(mobileMenu).not.toHaveClass('hidden');

    fireEvent.click(menuButton);

    expect(mobileMenu).toHaveClass('hidden');
  });
});
