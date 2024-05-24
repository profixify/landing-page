interface InputProps {
  placeholder: string;
  state: string | undefined;
  setStateFunc: ChangeEventHandler<HTMLInputElement>;
}
const Input: FC<InputProps> = ({ placeholder, state, setStateFunc }) => {
  return (
    <div className="flex flex-col w-full">
      <input
        className={`w-full p-2 px-3 rounded-md outline-none bg-black border border-gray-500 focus:border-white transition-[width] duration-[3000ms]`}
        placeholder={placeholder}
        onChange={setStateFunc}
      />
    </div>
  );
};

export default Input;
