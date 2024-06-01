import dayjs from "dayjs";
import { FC } from "react";

interface HeadingProps {
  createdDate: string;
}

export const Heading: FC<HeadingProps> = ({ createdDate }) => {
  const DATE_FORMAT = "DD MMM, YYYY";
  return (
    <div className="ps-2 my-2 first:mt-0">
      <h3 className="text-sm font-medium uppercase dark:text-slate-100 text-slate-700">
        {dayjs(createdDate).format(DATE_FORMAT)}
      </h3>
    </div>
  );
};
