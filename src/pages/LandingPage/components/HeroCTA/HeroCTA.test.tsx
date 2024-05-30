import { render } from '@testing-library/react';
import HeroCTA from '.';
import { MemoryRouter } from 'react-router-dom';
describe('HeroCTA', () => {
  it('should render the HeroCTA component', () => {
    render(
      <MemoryRouter>
        <HeroCTA />
      </MemoryRouter>
    );

    const heroCTA = document.querySelector('section');
    expect(heroCTA).toBeInTheDocument();
  });

  it('should render the HeroCTA title', () => {
    render(
      <MemoryRouter>
        <HeroCTA />
      </MemoryRouter>
    );

    const heroCTATitle = document.querySelector('h3');
    expect(heroCTATitle).toBeInTheDocument();
    expect(heroCTATitle?.textContent).toBe(
      'Ready to create your unique event invites?'
    );
  });

  it('should render the HeroCTA button', () => {
    render(
      <MemoryRouter>
        <HeroCTA />
      </MemoryRouter>
    );

    const heroCTAButton = document.querySelector('a');
    expect(heroCTAButton).toBeInTheDocument();
    expect(heroCTAButton?.textContent).toBe("I'm Ready");
  });
});
