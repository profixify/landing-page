import { cn } from "@/core/utils";
import { ChangeEventHandler, FC } from "react";

interface InputProps {
  placeholder: string;
  value: string | undefined;
  setStateFunc: ChangeEventHandler<HTMLInputElement>;
}
const Input: FC<InputProps> = ({ placeholder, setStateFunc, value }) => {
  return (
    <div className="flex flex-col w-full">
      <input
        className={cn(
          "w-full py-2 px-3 rounded-md outline-none transition-[width] duration-[3000ms]",
          "dark:bg-slate-950 bg-slate-100 border border-slate-400"
        )}
        placeholder={placeholder}
        onChange={setStateFunc}
        value={value}
      />
    </div>
  );
};

export default Input;
