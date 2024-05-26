import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mobileMenuClasses = {
    closed:
      'items-center justify-between hidden w-full md:flex md:w-auto md:order-1',
    open: 'items-center justify-between w-full md:flex md:w-auto md:order-1',
  };

  return (
    <nav aria-label="main navigation" className="border-b-2 border-grey">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-around md:justify-between mx-auto p-4">
        <Link
          to="https://inviami.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/inviami_logo_wide.png"
            className="h-16"
            alt="Inviami Logo"
          />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:bg-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors duration-400 ease-in-out"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-grey rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={() => {
              handleMenuOpen();
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="#DC5463"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            isMenuOpen ? mobileMenuClasses.open : mobileMenuClasses.closed
          }
          id="navbar-cta"
          data-testid="mobile-menu"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 md:p-0 text-primary hover:text-secondary transition-colors duration-400 ease-in-out"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className="block py-2 px-3 md:p-0 text-primary hover:text-secondary transition-colors duration-400 ease-in-out"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/templates"
                className="block py-2 px-3 md:p-0 text-primary hover:text-secondary transition-colors duration-400 ease-in-out"
              >
                Templates
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy"
                className="block py-2 px-3 md:p-0 text-primary hover:text-secondary transition-colors duration-400 ease-in-out"
              >
                Privacy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/event-admin"
                className="block py-2 px-3 md:p-0 text-primary hover:text-secondary transition-colors duration-400 ease-in-out"
              >
                Event Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
