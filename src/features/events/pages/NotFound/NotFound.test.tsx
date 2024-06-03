import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '.';

describe('NotFound page tests', () => {
  it('should render NotFound page and match snapshot', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(document.body).toMatchSnapshot();
  });

  it('should render 404 text', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(document.body).toHaveTextContent('404');
  });

  it('should render Page Not Found text', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(document.body).toHaveTextContent('Page Not Found');
  });

  it("should render Sorry, we can't find this event text", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(document.body).toHaveTextContent(
      "Sorry, we can't find this event. Our Internet detectives are on the case. Get in touch with us on Etsy if you need help."
    );
  });
});
