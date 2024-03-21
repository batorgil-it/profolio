"use client";
import { IconTerminal } from "@/assets";
import classNames from "classnames";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";

const EmploymentCard: FC<{
  company: string;
  date: string;
  position: string;
  roles: string[];
  techs: string[];
}> = ({ company, date, position, techs, roles }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgress,
        maxWidth: 800,
        width: "100%",
      }}
    >
      <div className="flex flex-row gap-4">
        <div className="max-w-[60px] hidden md:block">
          <div className="rounded-lg border-2 broder-white p-2">
            <IconTerminal />
          </div>
        </div>
        <div className="flex-1 w-full text-left">
          <div className="mb-4">
            <div className="font-semibold">{company}</div>
            <div className="font-medium text-gray-400">{date}</div>
          </div>
          <motion.div
            ref={ref}
            style={{
              scale: scaleProgress,
              width: "100%",
            }}
          >
            <div
              className={classNames(
                "flex gap-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left group hover:bg-gray-200 hover:dark:bg-gray-700"
              )}
            >
              <div className={classNames("w-full p-6 flex gap-4 flex-col")}>
                <div className="font-semibold text-[22px]">{position}</div>
                <div className="">
                  <ol className="list-disc pl-4">
                    {roles.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div>Technologies: </div>
                  {techs.map((item) => (
                    <div
                      key={item}
                      className="bg-gray-300 dark:bg-gray-900 px-3 rounded-lg"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default EmploymentCard;
