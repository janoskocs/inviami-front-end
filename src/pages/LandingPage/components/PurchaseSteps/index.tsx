const PurchaseSteps = () => {
  return (
    <section className="py-10">
      <h2 className="text-center font-bold text-primary text-3xl">
        Here's how to
      </h2>

      <div className="container mx-auto flex flex-col md:flex-row justify-around">
        <article className="m-4 border border-secondary bg-secondary rounded-lg shadow md:w-1/3">
          <img
            className="rounded-t-lg w-full"
            src="https://placeholder.com/500x500"
            alt=""
          />

          <div className="p-5">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-primary">
              Choose a theme
            </h3>
            <p className="mb-3 font-normal">
              Purchase your favourite theme on Etsy to get started. We will send
              you a link to get you started.
            </p>
          </div>
        </article>

        <article className="m-4 border border-secondary bg-secondary rounded-lg shadow md:w-1/3">
          <img
            className="rounded-t-lg w-full"
            src="https://placeholder.com/500x500"
            alt=""
          />

          <div className="p-5">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-primary">
              Onboarding
            </h3>
            <p className="mb-3 font-normal">
              We will guide you through the onboarding process to get you
              started on your new theme. We will message you with the details
              after your purchase on Etsy.
            </p>
          </div>
        </article>

        <article className="m-4 border border-secondary bg-secondary rounded-lg shadow  md:w-1/3">
          <img
            className="rounded-t-lg w-full"
            src="https://placeholder.com/500x500"
            alt=""
          />

          <div className="p-5">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-primary">
              Share your event
            </h3>
            <p className="mb-3 font-normal">
              It's time to share your event with your friends and family. Your
              customised event page will have a unique URL that you can share
              with your loved ones.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PurchaseSteps;
