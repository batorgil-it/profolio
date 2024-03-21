import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Certificate: FC<{
  imageSrc: string;
  title: string;
  from: string;
  href: string;
}> = ({ imageSrc, title, from, href }) => {
  return (
    <Link href={href} target="_blank">
      <div className="relative max-w-[300px] w-full bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-end overflow-hidden group cursor-pointer">
        <div className="absolute h-[1200px] w-[1200px] rounded-full bg-gray-200 dark:bg-gray-700 top-0 left-0 transition ease-in-out group-hover:-translate-y-1 group-hover:scale-150 duration-300"></div>
        <div className="relative flex flex-col flex-1 p-6 text-left gap-4">
          <div className="text-black dark:text-white font-semibold text-[24px]">
            {title}
          </div>
          <div className="font-medium text-gray-400">{from}</div>
        </div>
        <div className="relative w-[150px] h-[150px] transition ease-in-out group-hover:-translate-y-1 group-hover:scale-110 duration-100">
          <Image
            src={imageSrc}
            fill
            alt="featured"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </Link>
  );
};

export default Certificate;
