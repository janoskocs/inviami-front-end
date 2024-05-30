import { Link } from 'react-router-dom';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const EventAdmin = () => {
  return (
    <>
      <Nav />
      <section className="bg-secondary">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-white">
            <svg
              className="fill-primary w-20 h-20 mx-auto mt-4 sm:w-24 sm:h-24"
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 467 511.99"
            >
              <path d="M32.04 203.45H467v271.36c0 20.42-16.77 37.18-37.18 37.18H66.19c-20.41 0-37.17-16.72-37.17-37.18V204.32L0 115.66l63.2-17.94 32.51 87.51-63.67 18.22zm102.04-29.2 75.98-21.73-32.43-87.3-73.07 20.75 29.52 88.28zm114.44-32.74 85.79-24.53-32.37-87.07-82.85 23.55 29.43 88.05zm124.16-35.52 63.63-18.2L407.3 0l-63.97 18.16 29.35 87.83zM92.4 253.72h311.23c1.69 0 3.06 1.42 3.06 3.04v10.36c0 1.64-1.45 3.07-3.06 3.07H92.4c-1.61 0-3.06-1.37-3.06-3.07v-10.36c0-1.69 1.39-3.04 3.06-3.04zm34.09 70.49v-10.55c0-1.49-.85-2.23-2.54-2.23h-7.31v15.02h7.31c1.69 0 2.54-.75 2.54-2.24zm0 26.82v-10.68c0-1.48-.85-2.23-2.54-2.23h-7.31v15.14h7.31c1.69 0 2.54-.74 2.54-2.23zm-27.31-51.29h29.85c9.96 0 14.93 4.21 14.93 12.6v8.33c0 5.88-1.63 9.71-4.88 11.46 1.9.82 3.19 2.05 3.86 3.71.68 1.66 1.02 3.91 1.02 6.75v9.76c0 8.39-4.97 12.58-14.93 12.58H99.18v-65.19zm73.2 52.5h22.24v12.69h-40.01v-65.19h39.1v12.69h-21.33v13.32h18.38v12.69h-18.38v13.8zm61.12-52.5h17.46v65.19H233.5v-25.79h-12.8v25.79h-17.46v-65.19h17.46v26.71h12.8v-26.71zm28.62 0h17.77v65.19h-17.77v-65.19zm58.67 0h16.25v65.19h-15.23l-14.51-34.21v34.21h-16.25v-65.19h15.23l14.51 34.84v-34.84zm28.43 0h29.96c9.94 0 14.92 4.21 14.92 12.6v40.01c0 8.39-4.98 12.58-14.92 12.58h-29.96v-65.19zm27.11 51.29v-37.37c0-1.49-.85-2.23-2.54-2.23h-6.81v41.83h6.81c1.69 0 2.54-.74 2.54-2.23zm-254.52 93.34v-9.24c0-1.49-.83-2.24-2.54-2.24h-9.74c-5 0-8.54-1.09-10.61-3.3-2.07-2.2-3.1-5.36-3.1-9.48V406.7c0-8.39 4.94-12.6 14.83-12.6h13.91c9.88 0 14.82 4.21 14.82 12.6v7.82h-17.77v-5.49c0-1.49-.85-2.24-2.53-2.24h-2.95c-1.69 0-2.54.75-2.54 2.24v9.65c0 1.49.85 2.23 2.54 2.23h9.54c5.02 0 8.59 1.05 10.72 3.15 2.13 2.1 3.19 5.18 3.19 9.24v13.41c0 8.39-4.94 12.58-14.82 12.58h-13.8c-9.96 0-14.93-4.19-14.93-12.58v-7.83h17.77v5.49c0 1.49.84 2.23 2.54 2.23h2.93c1.71 0 2.54-.74 2.54-2.23zm71.59-25.89h-17.77v-10.45c0-1.49-.85-2.24-2.53-2.24h-3.56c-1.7 0-2.54.75-2.54 2.24v37.36c0 1.49.84 2.23 2.54 2.23h3.56c1.68 0 2.53-.74 2.53-2.23v-10.05h17.77v11.37c0 8.39-4.98 12.58-14.92 12.58h-14.32c-9.96 0-14.93-4.19-14.93-12.58V406.7c0-8.39 4.97-12.6 14.93-12.6h14.32c9.94 0 14.92 4.21 14.92 12.6v11.78zm27.41 28.12h22.24v12.69h-40.01V394.1h39.09v12.69h-21.32v13.32h18.37v12.69h-18.37v13.8zm60.6-52.5h16.25v65.19h-15.23l-14.52-34.21v34.21h-16.25V394.1h15.23l14.52 34.84V394.1zm45.17 52.5h22.24v12.69h-40V394.1h39.09v12.69h-21.33v13.32h18.38v12.69h-18.38v13.8zm55.83-2.23v-9.24c0-1.49-.83-2.24-2.54-2.24h-9.74c-5 0-8.54-1.09-10.61-3.3-2.07-2.2-3.1-5.36-3.1-9.48V406.7c0-8.39 4.94-12.6 14.84-12.6h13.9c9.88 0 14.82 4.21 14.82 12.6v7.82h-17.77v-5.49c0-1.49-.85-2.24-2.53-2.24h-2.95c-1.69 0-2.54.75-2.54 2.24v9.65c0 1.49.85 2.23 2.54 2.23h9.54c5.02 0 8.59 1.05 10.72 3.15 2.13 2.1 3.19 5.18 3.19 9.24v13.41c0 8.39-4.94 12.58-14.82 12.58h-13.8c-9.96 0-14.93-4.19-14.93-12.58v-7.83h17.77v5.49c0 1.49.84 2.23 2.54 2.23h2.93c1.71 0 2.54-.74 2.54-2.23z" />
            </svg>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h2 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl">
                Sign in to your event admin account
              </h2>
              <form className="space-y-4 md:space-y-4">
                <div>
                  <label
                    htmlFor="event-link"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Event link
                  </label>
                  <input
                    type="text"
                    name="event-link"
                    id="event-link"
                    className="bg-grey border border-secondary text-primary sm:text-sm rounded-lg block w-full p-2.5 focus:outline-primary"
                    placeholder="katys-30th-birthday"
                    required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-primary "
                  >
                    Pin
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••"
                    className="bg-grey border border-secondary text-primary sm:text-sm rounded-lg block w-full p-2.5"
                    required={true}
                    maxLength={4}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    to="https://inviami.etsy.com"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Forgot your PIN? Get in touch with us on Etsy.
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary hover:bg-secondary hover:text-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EventAdmin;
