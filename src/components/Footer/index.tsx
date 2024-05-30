import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-grey">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="https://inviami.com/" className="flex items-center">
              <img
                src="/inviami_logo_wide_transparent.png"
                className="h-8 me-3"
                alt="Inviami Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-primary uppercase">
                Follow us
              </h2>
              <ul className="text-black font-medium">
                <li className="mb-4">
                  <Link
                    to="https://instagram.com/inviami.invites"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.youtube.com/channel/UCycUWAt8rJjnTQ_xssS8Ogw"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-primary uppercase">
                Legal
              </h2>
              <ul className="text-black font-medium">
                <li className="mb-4">
                  <Link to="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-primary uppercase">
                Contact us
              </h2>
              <ul className="text-black font-medium">
                <li className="mb-4">
                  <Link
                    to="mailto:inviami.invites@gmail.com"
                    className="hover:underline"
                  >
                    inviami.invites@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-primary sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-primary sm:text-center">
            &copy; 2023{' '}
            <Link to="https://inviami.com" className="hover:underline">
              Inviami
            </Link>
            . Built by{' '}
            <Link to="https://janoskocs.com" className="hover:underline">
              János Kócs
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
