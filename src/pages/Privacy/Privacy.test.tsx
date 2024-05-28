import { render, screen } from '@testing-library/react';
import Privacy from '.';
import { MemoryRouter } from 'react-router-dom';

describe('Privacy component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Privacy />
      </MemoryRouter>
    );
  });

  it('should render the privacy policy heading', () => {
    const headingElement = screen.getByRole('heading', {
      name: /privacy policy page/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('should render the last updated date', () => {
    const lastUpdatedElement = screen.getByText(
      /last updated: april 05, 2024/i
    );
    expect(lastUpdatedElement).toBeInTheDocument();
  });

  it('should render the privacy policy content', () => {
    const privacyContentElement = screen.getByText(
      /this privacy policy describes our policies/i
    );
    expect(privacyContentElement).toBeInTheDocument();
  });

  it('should render the interpretation and definitions section', () => {
    const interpretationHeadingElement = screen.getByRole('heading', {
      name: /interpretation and definitions/i,
    });
    expect(interpretationHeadingElement).toBeInTheDocument();
  });

  it('should render the types of data collected section', () => {
    const typesOfDataHeadingElement = screen.getByRole('heading', {
      name: /types of data collected/i,
    });
    expect(typesOfDataHeadingElement).toBeInTheDocument();
  });

  it('should render the tracking technologies and cookies section', () => {
    const trackingTechnologiesHeadingElement = screen.getByRole('heading', {
      name: /tracking technologies and cookies/i,
    });
    expect(trackingTechnologiesHeadingElement).toBeInTheDocument();
  });

  it('should render the use of your personal data section', () => {
    const useOfPersonalDataHeadingElement = screen.getByRole('heading', {
      name: /use of your personal data/i,
    });
    expect(useOfPersonalDataHeadingElement).toBeInTheDocument();
  });

  it('should render the retention of your personal data section', () => {
    const retentionOfPersonalDataHeadingElement = screen.getByRole('heading', {
      name: /retention of your personal data/i,
    });
    expect(retentionOfPersonalDataHeadingElement).toBeInTheDocument();
  });

  it('should render the transfer of your personal data section', () => {
    const transferOfPersonalDataHeadingElement = screen.getByRole('heading', {
      name: /transfer of your personal data/i,
    });
    expect(transferOfPersonalDataHeadingElement).toBeInTheDocument();
  });

  it('should render the disclosure of your personal data section', () => {
    const disclosureOfPersonalDataHeadingElement = screen.getByRole('heading', {
      name: /disclosure of your personal data/i,
    });
    expect(disclosureOfPersonalDataHeadingElement).toBeInTheDocument();
  });

  it('should render the security of your personal data section', () => {
    const securityOfPersonalDataHeadingElement = screen.getByRole('heading', {
      name: /security of your personal data/i,
    });
    expect(securityOfPersonalDataHeadingElement).toBeInTheDocument();
  });

  it("should render the children's privacy section", () => {
    const childrensPrivacyHeadingElement = screen.getByRole('heading', {
      name: /children's privacy/i,
    });
    expect(childrensPrivacyHeadingElement).toBeInTheDocument();
  });

  it('should render the links to other websites section', () => {
    const linksToOtherWebsitesHeadingElement = screen.getByRole('heading', {
      name: /links to other websites/i,
    });
    expect(linksToOtherWebsitesHeadingElement).toBeInTheDocument();
  });

  it('should render the changes to this privacy policy section', () => {
    const changesToPrivacyPolicyHeadingElement = screen.getByRole('heading', {
      name: /changes to this privacy policy/i,
    });
    expect(changesToPrivacyPolicyHeadingElement).toBeInTheDocument();
  });
});
