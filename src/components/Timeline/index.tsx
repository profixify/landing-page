export { Heading } from "./Heading";
export { TimelineItem } from "./Item";

import { FC } from "react";
import { Heading } from "./Heading";
import { TimelineItem } from "./Item";
import { TimelineProps } from "./types";

const Timeline: FC<TimelineProps> = ({ statuses }) => {
  return (
    <div className="bg-black h-full p-5 px-10 rounded-lg">
      <Heading createdDate={statuses[0]?.createdAt} />
      <div className="flex flex-col">
        {statuses?.map((repairStatus, index) => (
          <TimelineItem
            key={repairStatus.uuid}
            {...repairStatus}
            isEnd={index + 1 === statuses.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
