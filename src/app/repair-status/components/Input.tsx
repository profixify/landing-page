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
        className={`w-full p-2 px-3 rounded-md outline-none bg-black border border-gray-500 focus:border-white transition-[width] duration-[3000ms]`}
        placeholder={placeholder}
        onChange={setStateFunc}
        value={value}
      />
    </div>
  );
};

export default Input;
