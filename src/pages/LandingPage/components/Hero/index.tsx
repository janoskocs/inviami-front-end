import { Link } from 'react-router-dom';
import Pulse from '@/components/Pulse';

const Hero = () => {
  return (
    <section className="bg-secondary">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className=" mr-auto place-self-center lg:col-span-6">
          <p className="uppercase text-gray font-light">Check it out on Etsy</p>
          <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary">
            Digital invitations with{' '}
            <span>
              live
              <Pulse />
            </span>{' '}
            RSVP
          </h2>
          <p className="max-w-2xl mb-6 font-light text-gray lg:mb-8 md:text-lg lg:text-xl">
            Create beautiful digital invitations and track RSVPs in real-time.
            Share your event with friends and family.
          </p>
          <Link
            target="_blank"
            to="https://inviami.etsy.com"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-grey hover:text-primary focus:ring-4 focus:primary transition-colors duration-400 ease-in-out"
          >
            Get started
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
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
