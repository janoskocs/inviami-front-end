import { Link } from 'react-router-dom';

const HeroCTA = () => {
  return (
    <section className="bg-secondary py-6 text-center">
      <h3 className="font-bold text-primary text-3xl">
        Ready to create your unique event invites?
      </h3>
      <Link
        target="_blank"
        to="https://inviami.etsy.com"
        className="inline-flex items-center justify-center px-5 py-3 mt-4 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-grey hover:text-primary focus:ring-4 focus:primary"
      >
        I'm Ready
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </section>
  );
};

export default HeroCTA;
