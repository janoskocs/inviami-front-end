import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Templates from '.';

describe('no template section tests,', () => {
  it('should display no templates message when no templates are defined', () => {
    render(
      <MemoryRouter>
        <Templates />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', { name: /visit our store/i });
    expect(link).toBeInTheDocument();

    expect(link).toHaveAttribute('href', 'https://inviami.etsy.com');

    expect(
      screen.getByText(
        'No templates found. Please check back soon or visit our store on Etsy for further updates!'
      )
    ).toBeInTheDocument();
  });
});
