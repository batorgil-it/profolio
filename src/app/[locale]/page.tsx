import AboutSection from "@/components/widgets/section_about";
import BlogSection from "@/components/widgets/section_blog";
import CertSection from "@/components/widgets/section_certificate";
import ContactMeSection from "@/components/widgets/section_contact_me";
import EmploymentSection from "@/components/widgets/section_employment";
import HeroSection from "@/components/widgets/section_hero";
import ProjectsSection from "@/components/widgets/section_projects";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const revalidate = 3600;

const HomePage: FC<{ params: { lng: string } }> = ({}) => {
  const t = useTranslations();
  return (
    <>
      <div className="absolute w-[100%] min-w-[800px] h-[100vh] hero opacity-50 -z-10 -top-[250px] overflow-hidden"></div>
      <main className="container mx-auto px-2 md:mt-24">
        <HeroSection />
        <AboutSection />
        <div className="h-12 md:h-36" id="certifications" />
        <CertSection />
        <div className="h-12 md:h-36" id="projects" />
        <ProjectsSection />
        <div className="h-12 md:h-36" id="experience" />
        <EmploymentSection />
        <div className="h-12 md:h-36" id="blogs" />
        <BlogSection />
        <div className="h-12 md:h-36" id="contact" />
        <ContactMeSection />
        <div className="h-12" id="contact" />

        <div className="text-center px-4 mb-12 font-thin">
          ©2024 Batorgil Davaajantsan. All rights reserved.
        </div>
      </main>
    </>
  );
};

export default HomePage;
