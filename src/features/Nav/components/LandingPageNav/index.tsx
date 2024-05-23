import { Link } from 'react-router-dom';

const LandingPageNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
        <button type="button">Log in</button>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LandingPageNav;
