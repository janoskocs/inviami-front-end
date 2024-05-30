import { render, screen } from '@testing-library/react';
import Footer from '.';
import { MemoryRouter } from 'react-router-dom';

describe('footer tests', () => {
  it('should render footer', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should render inviami logo', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const logo = screen.getByAltText('Inviami Logo');
    expect(logo).toBeInTheDocument();
  });

  it('should render follow us links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const instagram = screen.getByText('Instagram');
    expect(instagram).toBeInTheDocument();
    const youtube = screen.getByText('YouTube');
    expect(youtube).toBeInTheDocument();
  });

  it('should render legal links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const privacy = screen.getByText('Privacy Policy');
    expect(privacy).toBeInTheDocument();

    const privacyLink = screen.getByRole('link', { name: 'Privacy Policy' });

    expect(privacyLink).toHaveAttribute('href', '/privacy');
  });

  it('should render contact us links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const contact = screen.getByText('Contact us');
    expect(contact).toBeInTheDocument();
  });

  it('should render social media links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const instagram = screen.getByText('Instagram');
    expect(instagram).toBeInTheDocument();
    const youtube = screen.getByText('YouTube');
    expect(youtube).toBeInTheDocument();

    const instagramLink = screen.getByRole('link', { name: 'Instagram' });
    const youtubeLink = screen.getByRole('link', { name: 'YouTube' });

    expect(instagramLink).toHaveAttribute(
      'href',
      'https://instagram.com/inviami.invites'
    );

    expect(youtubeLink).toHaveAttribute(
      'href',
      'https://www.youtube.com/channel/UCycUWAt8rJjnTQ_xssS8Ogw'
    );
  });

  it('should render contact email', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const email = screen.getByText('inviami.invites@gmail.com');
    expect(email).toBeInTheDocument();

    const emailLink = screen.getByRole('link', {
      name: 'inviami.invites@gmail.com',
    });

    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:inviami.invites@gmail.com'
    );
  });
});
