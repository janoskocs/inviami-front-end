import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

const NotFound = () => {
  return (
    <>
      <Nav />
      <section className="bg-secondary">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-primary md:text-4xl">
              Page Not Found.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find this event. Our Internet detectives are on
              the case. Get in touch with us on Etsy if you need help.
            </p>
            <Link
              to="/"
              className="inline-flex text-white bg-primary hover:bg-white hover:text-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
