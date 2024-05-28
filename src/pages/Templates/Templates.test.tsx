import { render, screen } from '@testing-library/react';
import Templates from '.';
import { MemoryRouter } from 'react-router-dom';

describe('template parent tests,', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  //   it('should display no templates', () => {
  //     vi.mock('@/data/templates', () => ({
  //       templates: [],
  //     }));

  //     render(
  //       <MemoryRouter>
  //         <Templates />
  //       </MemoryRouter>
  //     );
  //     expect(
  //       screen.getByText(
  //         'No templates found. Please check back soon or visit our store on Etsy for further updates!'
  //       )
  //     ).toBeInTheDocument();
  //   });

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

    render(
      <MemoryRouter>
        <Templates />
      </MemoryRouter>
    );
    const templates = screen.getAllByRole('article');
    expect(templates).toHaveLength(3);
  });
});
