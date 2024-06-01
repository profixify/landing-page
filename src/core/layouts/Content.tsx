import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../utils";

type ContentProps = FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>;

const Content: ContentProps = ({ children, className, ...props }) => {
  return (
    <div
      className={cn("dark:bg-slate-950 bg-slate-100 px-5", className)}
      {...props}
    >
      <div className="flex flex-col items-center justify-center w-10/12">
        {children}
      </div>
    </div>
  );
};

export default Content;
