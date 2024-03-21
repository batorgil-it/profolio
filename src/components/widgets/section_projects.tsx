"use client";
import { useTranslations } from "next-intl";
import { FC } from "react";
import ProjectCard from "./project";

const ProjectsSection: FC = () => {
  return (
    <div className="text-center w-full flex justify-center">
      <div className="w-full flex flex-col justify-center items-center px-4">
        <div className="font-semibold text-[28px] mb-12">My Projects</div>
        <div className="w-full flex gap-6 md:gap-8 flex-col items-center">
          <ProjectCard
            direction="left"
            description="I played a key role in development of the VMS, where I was directly responsible for creating API services, Machine application, Staff applicatoin and deployment of system. Currently this system has over 9000 successful invoiceing dairly and 200+ machine using system."
            title="VMS - Vending Management System"
            imageSrc="/images/projects/vms.png"
            techs={[
              "SocketIO",
              "React Native",
              "Binary coding",
              "React",
              "Golang",
              "Micro-service",
            ]}
            link="https://play.google.com/store/search?q=Magic%20store&c=apps&hl=en&gl=US"
          />
          <ProjectCard
            direction="right"
            description="All in one is initialy developed as SaaS application but didn't get enough customer to make it to SaaS. Project main features are Ordering, Loyalty, Delivering. Currently it has 2 active projects called Ulaanbaatar coffee and Yuna you can search it in Play store or App store. I was a team lead of this project meanly contributed to Backend, DevOps and Amdin dashboard."
            title="All in one"
            imageSrc="/images/projects/aio.png"
            techs={[
              "Flutter",
              "React",
              "Antd",
              "Golang",
              "Payment integrations",
            ]}
            link="https://play.google.com/store/apps/details?id=com.fibo.ubcoffee&hl=en&gl=US"
          />
          <ProjectCard
            direction="left"
            description="iTrip is travel agency website mean features such as flight booking, hotel booking, insurance, e-sim purchase, trip. i meanly contributed to the frontend."
            title="iTrip.mn"
            imageSrc="/images/projects/itrip.png"
            techs={["NextJS", "Tailwind", "React", "Antd", "Golang"]}
            link="https://itrip.mn"
          />
          <ProjectCard
            direction="right"
            description="Able is ERP system that companies used locally system needed the private meeting system i was responsible online meeting system. it initially used public meeting from fibo.cloud but system required to limit participants, schedule meeting, authorize participant and meeting recording. I was reponsible for researching Jitsi opensource and it's configuration and developing required features."
            title="Able meeting"
            imageSrc="/images/projects/able.png"
            techs={["Jitsi", "Javascript", "Configuration", "Golang"]}
            link="https://meeting.cloud.mn"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
