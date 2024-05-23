import { render, screen } from '@testing-library/react';
import LandingPage from '.';

describe('LandingPage Component', () => {
  it('renders Hero component', () => {
    render(<LandingPage />);

    const heroElement = screen.getByRole('banner', { name: 'hero' });

    expect(heroElement).toBeInTheDocument();
  });
});
