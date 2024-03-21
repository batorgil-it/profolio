"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectCard: FC<{
  title?: string;
  description?: string;
  techs?: string[];
  imageSrc?: string;
  direction: "left" | "right";
  link?: string;
}> = ({ title, description, techs, imageSrc, direction }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <Link
      href={
        "https://play.google.com/store/search?q=Magic%20store&c=apps&hl=en&gl=US"
      }
      target="_blank"
    >
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        <div
          className={classNames(
            "max-w-[760px] w-full flex gap-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left group hover:bg-gray-200 hover:dark:bg-gray-700",
            direction === "right" ? "flex-row-reverse" : ""
          )}
        >
          <div
            className={classNames(
              "flex-1 w-full p-6 flex gap-4 flex-col",
              direction === "right" ? "md:pl-0" : "md:pr-0"
            )}
          >
            <div className="font-semibold text-[22px]">
              Vending Management System
            </div>
            <div className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              veniam, quae obcaecati rerum, unde ab debitis architecto
              voluptatibus commodi labore voluptatum dicta reprehenderit et
              totam beatae illum, amet sequi assumenda.
            </div>
            <div className="flex flex-wrap gap-2">
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
          <div className="hidden md:block w-[15rem] relative overflow-hidden">
            <div
              className={classNames(
                "absolute w-[32rem]  bottom-6 h-[15rem] transition ease-in-out group-hover:-translate-y-1 duration-300",
                direction === "right"
                  ? "right-6 group-hover:rotate-6"
                  : "left-6 group-hover:-rotate-6"
              )}
            >
              <Image
                src="/images/projects/vms.png"
                fill
                alt="featured"
                className="rounded-lg overflow-hidden"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
