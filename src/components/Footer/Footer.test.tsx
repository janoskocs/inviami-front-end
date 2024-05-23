import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('footer tests', () => {
  it('should render footer', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should render copy right text', () => {
    render(<Footer />);
    const copyRightText = screen.getByText('© 2024 All rights reserved.');
    expect(copyRightText).toBeInTheDocument();
  });

  it('should render janoskocs portfolio site', () => {
    render(<Footer />);
    const portfolio = screen.queryByRole('link', { name: 'janoskocs.com' });
    expect(portfolio).toBeInTheDocument();
  });

  it('should have correct href', () => {
    render(<Footer />);
    const portfolio = screen.getByRole('link', { name: 'janoskocs.com' });
    expect(portfolio).toHaveAttribute('href', 'https://janoskocs.com');
  });

  it('should have correct target', () => {
    render(<Footer />);
    const portfolio = screen.getByRole('link', { name: 'janoskocs.com' });
    expect(portfolio).toHaveAttribute('target', '_blank');
  });
});
