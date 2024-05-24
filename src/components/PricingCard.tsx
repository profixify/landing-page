import { FC } from "react";

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
}

const PricingCard: FC<PricingCardProps> = ({ title, description, price }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 flex-1 basis-1/3 max-w-xs">
      <div className="p-6">
        <h2 className="text-2xl font-semibold leading-6 text-white">{title}</h2>
        <p className="mt-4 text-zinc-300">{description}</p>
        <p className="mt-8">
          <span className="text-5xl font-extrabold text-white">${price}</span>
          <span className="text-base font-medium text-zinc-100">/month</span>
        </p>
        <button
          data-variant="slim"
          className="block w-full py-2 mt-8 text-sm font-semibold text-center text-zinc-900 rounded-md bg-white hover:bg-zinc-800 hover:text-white"
          type="button"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
