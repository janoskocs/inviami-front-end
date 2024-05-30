import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EventAdmin from '.';

describe('EventAdmin page tests', () => {
  it('should render EventAdmin page and match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <EventAdmin />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
