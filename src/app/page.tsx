import TypingEffect from "@/components/TypingEffect";

export default function Home() {
  return (
    <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
          Profixify
        </h1>
        <div className="flex flex-col text-xl max-w-2xl m-auto text-white">
          <span className="max-w-2xl m-auto mt-5 sm:text-center sm:text-2xl flex items-center gap-2">
            Our goal is to manage our clients <TypingEffect />
          </span>
        </div>
      </div>
    </div>
  );
}
