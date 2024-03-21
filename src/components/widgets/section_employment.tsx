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
          <EmploymentCard
            company="Techpartners LLC"
            date="Jan 2021 - Now"
            position="Senior Lead Software Developer"
            roles={[
              "As a Development Team Lead, I working on the diverse range of projects in techpartners. Core system types that i worked on, are ERP, Ecommerce and Real state agency internal Back-office. My most contributed project was Vending System Management project it has Staff app, Backoffice, and Vending machine application integrated with multiple payment integration such as Qpay, Socialpay, Hipay etc.",
              "I trained my peers and reviewed thier code.",
              "My role involved researching and developing features and services for customer requirement.",
              "I'm responsible for all DevOps operations as well as Calculating projects deadlines",
            ]}
            techs={[
              "Kubernetes",
              "Docker",
              "Nginx",
              "React",
              "Flutter",
              "NextJs",
              "AWS",
              "Golang",
            ]}
          />
          <EmploymentCard
            company="Fibo Cloud LLC"
            date="May 2020 - Jan 2021"
            position="Software Engineer"
            roles={[
              "As Software Engineer, I was responsible for finishing given task on deadline. Mean contributions I contributed are transfer.cloud.mn, Fibo stack front-end engineer, Feelmongolia app and other researching tasks. Monitoring system backoffice using React and Promotheos to display dashboard on cloud.mn but this project did not go live because our company has other mean issues at the hand but I was able to learn more about the system monitoring related topics.",
              "I learned DevOps and Deployment tasks.",
              "Collaborate with my peers and problem solving",
            ]}
            techs={[
              "Noobaa",
              "Wasabi",
              "Docker",
              "React",
              "Flutter",
              "AWS S3",
              "Golang",
            ]}
          />
          <EmploymentCard
            company="Customs, Taxation and Financial Information Technology Center of mongolia"
            date="Sep 2019 - Nov 2019"
            position="Software Engineer"
            roles={[
              "In one month of hard work I was able to become a respected player in my team and had opportunity to work with many micro-services. At the first i was front-end engineer but later on I became a full stack developer. Main contribution I made is developering reporting micro-service and prepared over 200 report templates for the API and advenced my SQL acknowledge",
            ]}
            techs={["Micro-service", "Java spring", "Angular"]}
          />
        </div>
      </div>
    </div>
  );
};

export default EmploymentSection;
