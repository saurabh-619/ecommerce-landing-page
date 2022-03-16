import { createContext, useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

type AnimationContextType = {
  isAnimating: boolean;
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AnimationContext = createContext<AnimationContextType>({
  isAnimating: false,
  setIsAnimating: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <AnimationContext.Provider value={{ isAnimating, setIsAnimating }}>
      <Component {...pageProps} />
    </AnimationContext.Provider>
  );
}

export default MyApp;
