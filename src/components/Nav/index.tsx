import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav aria-label="main navigation" className="border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="https://inviami.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/inviami_logo_wide.png"
            className="h-20"
            alt="Inviami Logo"
          />
          {/* <span className="self-center text-2xl font-light whitespace-nowrap dark:text-white">
            Inviami
          </span> */}
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:bg-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-grey rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
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
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 md:p-0 text-secondary bg-rose-700 rounded md:bg-transparent md:text-secondary md:dark:text-secondary hover:text-prmary"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className="block py-2 px-3 md:p-0 text-secondary bg-rose-700 rounded md:bg-transparent md:text-secondary md:dark:text-secondary"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/templates"
                className="block py-2 px-3 md:p-0 text-secondary bg-rose-700 rounded md:bg-transparent md:text-secondary md:dark:text-secondary"
              >
                Templates
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy"
                className="block py-2 px-3 md:p-0 text-secondary bg-rose-700 rounded md:bg-transparent md:text-secondary md:dark:text-secondary"
              >
                Privacy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/event-admin"
                className="block py-2 px-3 md:p-0 text-secondary bg-rose-700 rounded md:bg-transparent md:text-secondary md:dark:text-secondary"
              >
                Event Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <div data-testid="nav">
    //   <section>
    //     <div>
    //       <Link to="/">
    //         <h2 classNameName="text-3xl font-bold">Inviami</h2>
    //       </Link>
    //     </div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <NavLink to="/shop">Shop</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/templates">Templates</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/privacy">Privacy</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/admin">Event Admin</NavLink>
    //         </li>
    //       </ul>
    //     </nav>
    //   </section>
    // </div>
  );
};

export default Nav;
