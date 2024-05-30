import { render, screen } from '@testing-library/react';
import Pulse from '.';

describe('Pulse tests', () => {
  it('should render the pulse component', () => {
    render(<Pulse />);
    const pulse = screen.getByTestId('pulse');

    expect(pulse).toBeInTheDocument();
  });
});
