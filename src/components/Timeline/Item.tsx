import dayjs from "dayjs";
import { FC, useState } from "react";
import { HiCalendar } from "react-icons/hi2";
import { BaseRepairStatus } from "./types";

interface TimelineItemProps extends BaseRepairStatus {
  isEnd?: boolean;
}

export const TimelineItem: FC<TimelineItemProps> = ({
  title,
  createdAt,
  note,
  isEnd,
}) => {
  const [isShowNote, setIsShowNote] = useState<boolean>(false);
  const toggleShowNote = () => setIsShowNote(!isShowNote);
  return (
    <div className="flex gap-x-3">
      <div
        className={[
          isEnd
            ? "h-max"
            : "relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] dark:after:bg-white after:bg-slate-950",
        ].join(" ")}
      >
        <div className="relative z-10 size-7 flex justify-center items-center">
          <div className="size-2 rounded-full dark:bg-slate-100 bg-slate-950"></div>
        </div>
      </div>
      <div className="grow pt-0.5 pb-8 w-full relative">
        <div className="flex flex-col">
          <span className="dark:text-slate-100 text-slate-950 text-xs italic flex items-center gap-2">
            <HiCalendar />
            {dayjs(createdAt).format("DD MMM, YYYY HH:mm:ss")}
          </span>
          <h3
            className="flex gap-x-1.5 font-semibold dark:text-slate-100 text-slate-950"
            onClick={note ? toggleShowNote : undefined}
          >
            {title}
          </h3>
        </div>
        <div className="text-xs max-h-10 overflow-auto text-gray-500">
          {note ?? "No Information"}
        </div>
      </div>
    </div>
  );
};
