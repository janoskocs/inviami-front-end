import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LogInForm from '.';

describe('LogInForm page tests', () => {
  const mockSetUser = vi.fn();
  beforeEach(() => {
    mockSetUser.mockClear();
  });

  it('should render LogInForm page and match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <LogInForm setUser={mockSetUser} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render cookies notice when cookies are enabled', () => {
    render(
      <MemoryRouter>
        <LogInForm setUser={mockSetUser} />
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
        <LogInForm setUser={mockSetUser} />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        'Cookies are disabled in this browser. This is not a problem, it just means that you will have to log in again in case you refresh your browser.'
      )
    ).toBeInTheDocument();
  });

  it('should show error messages when form fields are empty and submitted', () => {
    render(
      <MemoryRouter>
        <LogInForm setUser={mockSetUser} />
      </MemoryRouter>
    );

    fireEvent.submit(screen.getByRole('button', { name: /sign in/i }));

    expect(
      screen.getByText('Please enter the event link.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Please enter your event PIN.')
    ).toBeInTheDocument();
  });

  it('should show error message when event link is empty and password is provided', () => {
    render(
      <MemoryRouter>
        <LogInForm setUser={mockSetUser} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/pin/i), {
      target: { value: '1234' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /sign in/i }));

    expect(
      screen.getByText('Please enter the event link.')
    ).toBeInTheDocument();
    expect(
      screen.queryByText('Please enter your event PIN.')
    ).not.toBeInTheDocument();
  });

  it('should show error message when password is empty and event link is provided', () => {
    render(
      <MemoryRouter>
        <LogInForm setUser={mockSetUser} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/event link/i), {
      target: { value: 'katys-30th-birthday' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /sign in/i }));

    expect(
      screen.queryByText('Please enter the event link.')
    ).not.toBeInTheDocument();
    expect(
      screen.getByText('Please enter your event PIN.')
    ).toBeInTheDocument();
  });

  it('should not show error messages when both event link and password are provided', () => {
    render(
      <MemoryRouter>
        <LogInForm setUser={mockSetUser} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/event link/i), {
      target: { value: 'katys-30th-birthday' },
    });
    fireEvent.change(screen.getByLabelText(/pin/i), {
      target: { value: '1234' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /sign in/i }));

    expect(
      screen.queryByText('Please enter the event link.')
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('Please enter your event PIN.')
    ).not.toBeInTheDocument();
  });
});
