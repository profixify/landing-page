import PricingCard from "@/components/PricingCard";

const Pricing = () => {
  return (
    <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
      <div>
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold dark:text-white text-slate-950 sm:text-center sm:text-6xl">
            Pricing Plans
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl dark:text-zinc-200 text-slate-750 sm:text-center sm:text-2xl">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 flex flex-wrap justify-center gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          <PricingCard
            title="Hobby"
            description="All the basics for starting a new business!"
            price={10}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
