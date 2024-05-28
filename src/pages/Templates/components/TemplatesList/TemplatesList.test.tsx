import { render, screen } from '@testing-library/react';
import TemplatesList from '.';
describe('template list tests,', () => {
  it('should display all templates', () => {
    vi.mock('@/data/templates', () => ({
      templates: [
        {
          name: 'Birthday Party Invitation',
          description: 'A beautiful birthday party invitation template.',
          price: 12.99,
          sale: true,
          salePrice: 9.99,
          image: 'https://via.placeholder.com/300',
          url: 'https://inviami.etsy.com',
          demoUrl: 'https://inviami.com/demo',
          id: 1,
        },
        {
          name: 'Wedding Invitation',
          description: 'A beautiful wedding invitation template.',
          price: 19.99,
          sale: false,
          salePrice: 15.99,
          image: 'https://via.placeholder.com/300',
          url: 'https://inviami.etsy.com',
          demoUrl: 'https://inviami.com/demo',
          id: 2,
        },
        {
          name: 'Baby Shower Invitation',
          description: 'A beautiful baby shower invitation template.',
          price: 14.99,
          sale: true,
          salePrice: 11.99,
          image: 'https://via.placeholder.com/300',
          url: 'https://inviami.etsy.com',
          demoUrl: 'https://inviami.com/demo',
          id: 3,
        },
      ],
    }));
    render(<TemplatesList />);
    const templates = screen.getAllByRole('article');
    expect(templates).toHaveLength(3);

    expect(screen.getByText('Birthday Party Invitation')).toBeInTheDocument();
    expect(screen.getByText('Wedding Invitation')).toBeInTheDocument();
    expect(screen.getByText('Baby Shower Invitation')).toBeInTheDocument();
  });
});
