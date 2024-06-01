import { cn } from "@/core/utils";
import { FC } from "react";

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
}

const PricingCard: FC<PricingCardProps> = ({ title, description, price }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-sm divide-y dark:bg-slate-100 bg-zinc-950 flex-1 basis-1/3 max-w-xs">
      <div className="p-6">
        <h2 className="text-2xl font-semibold leading-6 dark:text-slate-950 text-zinc-200">
          {title}
        </h2>
        <p className="mt-4 dark:text-slate-950 text-zinc-200">{description}</p>
        <p className="mt-8">
          <span className="text-5xl font-extrabold dark:text-slate-950 text-zinc-200">
            ${price}
          </span>
          <span className="text-base font-medium dark:text-slate-950 text-zinc-200">
            /month
          </span>
        </p>
        <button
          data-variant="slim"
          className={cn(
            "block w-full py-2 mt-8 text-sm font-semibold text-center rounded-md",
            "dark:bg-slate-900 bg-white dark:text-zinc-200 text-zinc-950"
          )}
          type="button"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
