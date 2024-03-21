"use client";
import { useTranslations } from "next-intl";
import { FC } from "react";
import EmploymentCard from "./employment";

const EmploymentSection: FC = () => {
  const t = useTranslations("about");

  return (
    <div className="text-center w-full flex justify-center">
      <div className="w-full flex flex-col justify-center items-center px-4">
        <div className="font-semibold text-[28px] mb-12">My Experience</div>
        <div className="w-full flex gap-6 md:gap-8 flex-col items-center">
          <EmploymentCard />
          <EmploymentCard />
        </div>
      </div>
    </div>
  );
};

export default EmploymentSection;
