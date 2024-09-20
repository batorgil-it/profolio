"use client";
import { FC } from "react";
import Certificate from "./certificate";

const CertSection: FC = () => {
  return (
    <div className="text-center w-full flex justify-center">
      <div className="w-full flex flex-col justify-center items-center px-4">
        <div className="font-semibold text-[28px] mb-12">My Certifications</div>
        <div className="flex gap-6 flex-col md:flex-row ">
          <Certificate
            title="AWS Certified Solutions Architect - Associate"
            from="Amazon Web Services"
            href="https://cp.certmetrics.com/amazon/en/public/verify/credential/R1PME5SLCB14QW39"
            imageSrc="/images/aws-sa.webp"
          />
          <Certificate
            title="CKA: Certified Kubernetes Administrator"
            from="Linux Foundation"
            href="https://www.credly.com/badges/b40b2651-2c05-4e7d-a1ff-c62c454eced3/public_url"
            imageSrc="/images/cka.webp"
          />
          <Certificate
            title="CKAD: Certified Kubernetes Application Developer"
            from="Linux Foundation"
            href="https://www.credly.com/badges/e571d5f7-2af4-498e-a4be-b683502aa899/public_url"
            imageSrc="/images/ckad.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CertSection;
