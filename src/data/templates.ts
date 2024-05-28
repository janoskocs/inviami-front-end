type Template = {
  name: string;
  description: string;
  price: number;
  sale: boolean;
  salePrice: number;
  image: string;
  url: string;
  demoUrl: string;
  id: number;
};

export const templates: Template[] = [
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
];
