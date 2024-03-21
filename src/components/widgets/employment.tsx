"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconTerminal } from "@/assets";

const EmploymentCard: FC<{
  title?: string;
  description?: string;
  techs?: string[];
  imageSrc?: string;
  link?: string;
}> = ({ title, description, techs, imageSrc }) => {
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
      }}
    >
      <div className="flex flex-row gap-4">
        <div className="max-w-[60px]">
          <div className="rounded-lg border-2 broder-white p-2">
            <IconTerminal />
          </div>
        </div>
        <div className="flex-1 w-full text-left">
          <div className="mb-4">
            <div className="font-semibold">Techpartners LLC</div>
            <div className="font-medium text-gray-400">Jan 2021 - Now</div>
          </div>
          <motion.div
            ref={ref}
            style={{
              scale: scaleProgress,
            }}
          >
            <div
              className={classNames(
                "max-w-[760px] w-full flex gap-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left group hover:bg-gray-200 hover:dark:bg-gray-700"
              )}
            >
              <div
                className={classNames("flex-1 w-full p-6 flex gap-4 flex-col")}
              >
                <div className="font-semibold text-[22px]">
                  Senior Lead Software Developer
                </div>
                <div className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor veniam, quae obcaecati rerum, unde ab debitis architecto
                  voluptatibus commodi labore voluptatum dicta reprehenderit et
                  totam beatae illum, amet sequi assumenda.
                </div>
                <div className="flex flex-wrap gap-2">
                  <div>Technologies: </div>
                  <div className="bg-gray-300 dark:bg-gray-900 px-3 rounded-lg">
                    React
                  </div>
                  <div className="bg-gray-300 dark:bg-gray-900 px-3 rounded-lg">
                    React Native
                  </div>
                  <div className="bg-gray-300 dark:bg-gray-900 px-3 rounded-lg">
                    Golang
                  </div>
                  <div className="bg-gray-300 dark:bg-gray-900 px-3 rounded-lg">
                    Microservice
                  </div>
                  <div className="bg-gray-300 dark:bg-gray-900 px-3 rounded-lg">
                    Binary coding
                  </div>
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
