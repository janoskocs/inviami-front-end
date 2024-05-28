import { Link } from 'react-router-dom';

const NoTemplates = () => {
  return (
    <>
      <p className="text-center">
        No templates found. Please check back soon or visit our store on Etsy
        for further updates!
      </p>
      <Link
        to="https://inviami.etsy.com"
        target="_blank"
        className="underline text-center block my-4"
      >
        Visit our store
      </Link>
    </>
  );
};

export default NoTemplates;
