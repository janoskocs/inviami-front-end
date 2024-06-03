import { render, screen } from '@testing-library/react';
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

  it('should render cookies notice when cookies are enabled', () => {
    render(
      <MemoryRouter>
        <EventAdmin />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        'This website utilises cookies to maintain your logged-in status on the Admin page. These cookies are automatically deleted when you close this browser tab. By continuing to use this service, you agree to the use of these cookies, or you may click here to decline them. To learn more, please read our'
      )
    ).toBeInTheDocument();
  });

  it('should render cookies notice when cookies are disabled', () => {
    Object.defineProperty(window, 'sessionStorage', {
      value: {
        getItem: vi.fn(() => {
          throw new Error('sessionStorage disabled');
        }),
      },
      writable: true,
    });

    render(
      <MemoryRouter>
        <EventAdmin />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        'Cookies are disabled in this browser. This is not a problem, it just means that you will have to log in again in case you refresh your browser.'
      )
    ).toBeInTheDocument();
  });
});
