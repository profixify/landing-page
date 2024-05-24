"use client";

import Typewriter from "typewriter-effect";

const TypingEffect = () => {
  return (
    <Typewriter
      options={{
        loop: true,
        strings: ["customers", "stocks", "repairing process"],
        autoStart: true,
      }}
    />
  );
};

export default TypingEffect;
