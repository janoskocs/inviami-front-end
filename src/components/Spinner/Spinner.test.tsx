import Spinner from '.';
import { render, screen } from '@testing-library/react';

describe('Spinner tests', () => {
  it("should render 'Loading..", () => {
    render(<Spinner />);
    const text = screen.getByText('Loading...');
    expect(text).toBeInTheDocument();
  });
});
