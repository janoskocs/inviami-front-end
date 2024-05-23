import Nav from '../../features/Nav/components/Nav';
import Footer from '../Footer';

type LandingLayoutProps = {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <Nav context="landing" />
      <main> {children}</main>
      <Footer />
    </>
  );
};

export default LandingLayout;
