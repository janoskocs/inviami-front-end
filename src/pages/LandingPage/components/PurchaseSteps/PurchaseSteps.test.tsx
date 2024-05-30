import { render, screen } from '@testing-library/react';
import PurchaseSteps from '.';

describe('purchase steps tests', () => {
  it('should render the purchase steps component', () => {
    render(<PurchaseSteps />);
    const purchaseSteps = screen.getByRole('heading', {
      name: "Here's how to",
    });

    expect(purchaseSteps).toBeInTheDocument();

    expect(purchaseSteps).toHaveTextContent("Here's how to");
  });

  it('should render the first step', () => {
    render(<PurchaseSteps />);
    const firstStep = screen.getByText('Choose a theme');

    expect(firstStep).toBeInTheDocument();
    expect(firstStep).toHaveTextContent('Choose a theme');
  });

  it('should render the first step description', () => {
    render(<PurchaseSteps />);
    const firstStepDescription = screen.getByText(
      'Purchase your favourite theme on Etsy to get started. We will send you a link to get you started.'
    );

    expect(firstStepDescription).toBeInTheDocument();
    expect(firstStepDescription).toHaveTextContent(
      'Purchase your favourite theme on Etsy to get started. We will send you a link to get you started.'
    );
  });

  it('should render the second step', () => {
    render(<PurchaseSteps />);
    const secondStep = screen.getByText('Onboarding');

    expect(secondStep).toBeInTheDocument();
    expect(secondStep).toHaveTextContent('Onboarding');
  });

  it('should render the second step description', () => {
    render(<PurchaseSteps />);
    const secondStepDescription = screen.getByText(
      'We will guide you through the onboarding process to get you started on your new theme. We will message you with the details after your purchase on Etsy.'
    );

    expect(secondStepDescription).toBeInTheDocument();
    expect(secondStepDescription).toHaveTextContent(
      'We will guide you through the onboarding process to get you started on your new theme. We will message you with the details after your purchase on Etsy.'
    );
  });

  it('should render the third step', () => {
    render(<PurchaseSteps />);
    const thirdStep = screen.getByText('Share your event');

    expect(thirdStep).toBeInTheDocument();
    expect(thirdStep).toHaveTextContent('Share your event');
  });

  it('should render the third step description', () => {
    render(<PurchaseSteps />);
    const thirdStepDescription = screen.getByText(
      "It's time to share your event with your friends and family. Your customised event page will have a unique URL that you can share with your loved ones."
    );

    expect(thirdStepDescription).toBeInTheDocument();
    expect(thirdStepDescription).toHaveTextContent(
      "It's time to share your event with your friends and family. Your customised event page will have a unique URL that you can share with your loved ones."
    );
  });
});
