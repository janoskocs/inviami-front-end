import Hero from './components/Hero';
import Nav from '@/components/Nav';
import PurchaseSteps from './components/PurchaseSteps';
import HeroCTA from './components/HeroCTA';
import Footer from '@/components/Footer';

const LandingPage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <PurchaseSteps />
      <HeroCTA />
      <Footer />
    </>
  );
};

export default LandingPage;
