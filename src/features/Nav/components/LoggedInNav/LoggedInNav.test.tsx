import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoggedInNav from '.';

describe('LoggedInNav tests', () => {
  it('should render the navigation element', () => {
    render(
      <MemoryRouter>
        <LoggedInNav />
      </MemoryRouter>
    );
    const navigation = screen.queryByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });

  it('should render logged in buttons', () => {
    render(
      <MemoryRouter>
        <LoggedInNav />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent('Profile');
    expect(buttons[1]).toHaveTextContent('Log out');
  });
});
