/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
import { forwardRef, type JSX, useRef } from "react";
import { DotLottie, DotLottieReact, type Mode } from "@lottiefiles/dotlottie-react";

export type LottieProps = {
  iconMode?: Mode;
  className?: string;
  isAutoPlay?: boolean;
};

export const Lottie = forwardRef<HTMLDivElement, LottieProps>(
  ({  iconMode, isAutoPlay, ...props }, ref): JSX.Element => {
    const iconRef = useRef<DotLottie | null>(null);
    return (
      <div
        onMouseEnter={() => iconRef.current?.play()}
        onMouseLeave={() => iconRef.current?.stop()}
        {...props}
        ref={ref}
      >
        {/* <DotLottieReact
          dotLottieRefCallback={(el) => {
            iconRef.current = el;
          }}
          mode={iconMode}
          src={`https://lottie.host/791abb1c-94fa-47f9-9950-3ac3c16a5d9d/rZqgUTsGwz.lottie`}
          loop
          autoplay={isAutoPlay}
          className="h-full w-full"
        /> */}
      </div>
    );
  }
);
