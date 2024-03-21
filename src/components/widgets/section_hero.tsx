"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

const HeroSection: FC = () => {
  const t = useTranslations("hero");

  return (
    <div
      className="py-[50px] md:pt-[180px] flex items-center justify-center max-w-[760px] w-full mx-auto flex-col relative"
      id="home"
    >
      <div className="relative">
        <Image src="/images/profile.png" width={98} height={98} alt="profile" />
      </div>
      <div className="mt-4 font-serif text-[16px] md:text-[18px] flex items-center gap-4 bg-white dark:bg-secondary px-4 rounded-md ">
        <div className="relative inline-flex">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div className="w-3 h-3 bg-primary rounded-full absolute top-0 left-0 animate-ping"></div>
          <div className="w-3 h-3 bg-primary rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
        <p>{t("available")}</p>
      </div>

      <div className="font-serif text-[24px] md:text-[28px] font-bold mt-9 text-center">
        <h1>
          <span className="text-primary">{t("hi")}</span> 👋 {t("fullname")}
        </h1>
        <h2 className="text-[20px] md:text-[26px]">
          {t.rich("text", {
            guidelines: (chunks) => (
              <span className="text-primary">{chunks}</span>
            ),
          })}
        </h2>
      </div>

      <div className="mt-14 flex flex-wrap gap-4 md:gap-24 justify-center">
        <div className="relative w-[120px] h-[70px]">
          <Image
            src="/images/ict.png"
            fill
            alt="featured"
            className="invert dark:invert-0"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="relative w-[120px] h-[70px]">
          <Image
            src="/images/fibo.png"
            fill
            alt="featured"
            className="invert dark:invert-0"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="relative w-[120px] h-[70px]">
          <Image
            src="/images/tech.png"
            fill
            alt="featured"
            className="invert dark:invert-0"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div
        className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20 animate-pulse"
        id="about"
      ></div>
    </div>
  );
};

export default HeroSection;
