import classNames from "classnames";
import { FC } from "react";

const LoadingAnimation: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative inline-flex">
        <div className={classNames("w-3 h-3 rounded-full", className)}></div>
        <div
          className={classNames(
            "w-3 h-3 rounded-full absolute top-0 left-0 animate-ping",
            className
          )}
        ></div>
        <div
          className={classNames(
            "w-3 h-3 rounded-full absolute top-0 left-0 animate-pulse",
            className
          )}
        ></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
