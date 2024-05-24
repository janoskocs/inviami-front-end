import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div data-testid="nav">
      <section>
        <div>
          <Link to="/">
            <h2>Inviami</h2>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/templates">Templates</NavLink>
            </li>
            <li>
              <NavLink to="/privacy">Privacy</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Event Admin</NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Nav;
