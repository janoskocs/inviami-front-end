import { Link } from 'react-router-dom';
import { lazyImport } from '@/utils/lazyImport';

const LoggedInNav = lazyImport('../features/Nav/components/LoggedInNav');
import Input from '@components/Input';
import LandingPageNav from '../LandingPageNav';
import { Suspense } from 'react';
import Spinner from '@/components/Spinner';

type NavProps = {
  context: 'landing' | 'logged-in';
};
const Nav = ({ context }: NavProps) => {
  console.log(context);
  return (
    <header>
      <Link to="/" title="TaskVillam">
        <img src="images/" alt="Logo" />
      </Link>
      <form>
        <Input type="search" label="Search" />
      </form>
      {context === 'landing' && <LandingPageNav />}
      {context === 'logged-in' && (
        <Suspense fallback={<Spinner />}>
          <LoggedInNav />
        </Suspense>
      )}
    </header>
  );
};

export default Nav;
