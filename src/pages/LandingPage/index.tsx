import Hero from './components/Hero';
import Nav from '@/components/Nav';
import PurchaseSteps from './components/PurchaseSteps';
import HeroCTA from './components/HeroCTA';

const LandingPage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <PurchaseSteps />
      <HeroCTA />
    </>
  );
};

export default LandingPage;
