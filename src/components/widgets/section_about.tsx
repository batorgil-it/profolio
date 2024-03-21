"use client";
import { useTranslations } from "next-intl";
import { FC } from "react";

const AboutSection: FC = () => {
  const t = useTranslations("about");

  return (
    <div className="text-center w-full flex justify-center">
      <div className="p-4">
        <div className="font-semibold text-[28px]">{t("about_me")}</div>
        <div className="max-w-[760px] mt-8 text-[16px]">{t("text")}</div>
      </div>
    </div>
  );
};

export default AboutSection;
