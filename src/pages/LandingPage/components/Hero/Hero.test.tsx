import { screen, render } from '@testing-library/react';
import Hero from '.';

describe('hero tests', () => {
  it('should render the hero component', () => {
    render(<Hero />);
    const heroElement = screen.getByRole('banner', { name: 'hero' });
    const titleElement = screen.getByText('Inviami');
    const descriptionElement = screen.getByText(/You're invited/);

    expect(heroElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('should render a get started button with type button', () => {
    render(<Hero />);
    const buttonElement = screen.getByRole('button', { name: 'Get Started' });
    expect(buttonElement).toHaveAttribute('type', 'button');
    expect(buttonElement).toBeInTheDocument();
  });
});
