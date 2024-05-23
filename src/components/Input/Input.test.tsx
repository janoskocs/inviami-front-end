import { render, screen } from '@testing-library/react';
import Input from '.';

describe('Input tests', () => {
  it('should render the input', () => {
    render(<Input type="search" label="Search" />);
    const input = screen.getByRole('searchbox');
    expect(input).toBeInTheDocument();
  });
});
