"use client";

import { IconMN, IconMoon, IconSun, IconUS } from "@/assets";
import { themeAtom } from "@/atoms/theme";
import { useAtom } from "jotai";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

const Header: FC<{ locale: string }> = ({ locale }) => {
  const [theme, setTheme] = useAtom(themeAtom);
  const t = useTranslations();

  return (
    <header className="md:fixed w-full flex items-center justify-center z-10 md:top-4">
      <div className="backdrop-blur-md bg-gray-100 dark:bg-gray-900 p-2 md:rounded-lg flex items-center gap-6 pl-4 pr-4 flex-wrap">
        <Link className="link" href={"/#home"}>
          #home
        </Link>
        <Link className="link" href={"/#about"}>
          #about
        </Link>
        <Link className="link" href={"/#certifications"}>
          #certification
        </Link>
        <Link className="link" href={"/#projects"}>
          #projects
        </Link>
        <Link className="link" href={"/#experience"}>
          #experience
        </Link>
        <Link className="link" href={"/#blogs"}>
          #blogs
        </Link>
        <Link className="link" href={"/#contact"}>
          #contact
        </Link>
        <Link href={locale == "en" ? "/mn" : "/en"}>
          {locale == "en" && <IconUS className="w-6 h-4 rounded-md" />}
          {locale == "mn" && <IconMN className="w-6 h-4 rounded-md" />}
        </Link>
        <div
          className="rounded-lg text-gray-500  cursor-pointer"
          onClick={() => {
            if (theme == "dark") {
              setTheme("ligth");
            } else {
              setTheme("dark");
            }
          }}
        >
          {theme === "dark" && <IconMoon />}
          {theme === "ligth" && <IconSun />}
        </div>
      </div>
    </header>
  );
};

export default Header;
