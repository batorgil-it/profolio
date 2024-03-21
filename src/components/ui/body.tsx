"use client";

import { themeAtom } from "@/atoms/theme";
import classNames from "classnames";
import { useAtom } from "jotai";
import { FC, ReactNode } from "react";

const AppContainer: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const [theme] = useAtom(themeAtom);

  return (
    <body className={classNames(className, theme, "dark:bg-secondary")}>
      {children}
    </body>
  );
};

export default AppContainer;
