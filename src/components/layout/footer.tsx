"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

const Footer: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <footer className="w-full relative">
      <div className="container mx-auto relative -bottom-24">{children}</div>
      <div className="bg-dark w-full pt-12">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 md:p-24 text-white mx-auto gap-4">
          <div>
            <Image
              src={"/images/logo-white.png"}
              alt="logo"
              width={130}
              height={26}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-bold mb-2">Pages</p>
            <Link href={"/"}>Home</Link>
            <Link href={"/podcasts"}>Podcast</Link>
            <Link href={"/host"}>Host</Link>
            <Link href={"/blogs"}>Blog</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-bold mb-2">Reach Us</p>
            <Link href={"/"}>Contact</Link>
            <Link href={"/"}>About</Link>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white text-[16px] font-bold min-h-[64px] flex items-center justify-center">
        <div>©Powered by Batorgil</div>
      </div>
    </footer>
  );
};

export default Footer;
