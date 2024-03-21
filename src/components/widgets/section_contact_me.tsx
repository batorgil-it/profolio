"use client";

import {
  IconArrowRight,
  IconCloudDownload,
  IconInsta,
  IconLinkedin,
  IconLoader,
} from "@/assets";
import classNames from "classnames";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactMeSection: FC = () => {
  const t = useTranslations("about");
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ user_name: string; user_email: string; message: string }>();
  const onSubmit: SubmitHandler<{
    user_name: string;
    user_email: string;
    message: string;
  }> = async (data) => {
    try {
      setLoading(true);
      const res = await emailjs.send(
        "service_oae1z9d",
        "template_o08cmu4",
        data,
        {
          publicKey: "cp-zd3dbv0OIW4a1K",
        }
      );
      toast.success("Send successfully");
    } catch (error) {
      toast.error("email sent has some error");
    } finally {
      setLoading(false);
    }
  };

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="text-center w-full flex justify-center">
      <div className="w-full flex flex-col justify-center items-center px-4">
        <div className="font-semibold text-[28px] mb-12">Contact Me</div>
        <div className="w-full flex gap-6 md:gap-8 flex-col items-center">
          <motion.div
            ref={ref}
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
          >
            <div
              className={classNames(
                "max-w-[1200px] w-full flex flex-col md:flex-row gap-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left group "
              )}
            >
              <div
                className={classNames("flex-1 w-full p-6 flex gap-4 flex-col")}
              >
                <div className="font-semibold text-[22px]">
                  Enjoyed my work? Let’s work together
                </div>
                <div className="">
                  I’m always up for a chat. Pop me an email at{" "}
                  <Link
                    href={"mailto:hello@batorgil.dev"}
                    className="text-primary"
                  >
                    hello@batorgil.dev
                  </Link>{" "}
                  or give me a shout on social media.
                </div>
                <div className="w-full">
                  <p>Telegram: +97689985130</p>
                </div>
                <div className="flex-1" />
                <div className="flex gap-4 items-center flex-wrap">
                  <Link href={"https://www.linkedin.com/in/batorgil-it/"}>
                    <div className="flex items-center justify-center gap-2 bg-secondary text-white p-2 rounded-md font-medium">
                      <IconLinkedin />
                    </div>
                  </Link>
                  <Link href={"https://www.instagram.com/batorgil.it/"}>
                    <div className="flex items-center justify-center gap-2 bg-secondary text-white p-2 rounded-md font-medium">
                      <IconInsta />
                    </div>
                  </Link>
                  <Link href={"/cv.pdf"}>
                    <div className="flex items-center justify-center gap-2 bg-secondary text-white p-2 rounded-md font-medium px-4">
                      <span>Download CV</span> <IconCloudDownload />
                    </div>
                  </Link>
                </div>
              </div>
              <form
                className="flex-1 w-full flex flex-col gap-4 p-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col gap-2">
                  <input
                    placeholder="Name"
                    type="text"
                    {...register("user_name", { required: true })}
                  />
                  {errors.user_name && (
                    <span className="text-sm text-red-400">
                      Name is required
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    placeholder="Email"
                    type="email"
                    {...register("user_email", { required: true })}
                  />
                  {errors.user_email && (
                    <span className="text-sm text-red-400">
                      Name is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <textarea
                    placeholder="You message"
                    rows={4}
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="text-sm text-red-400">
                      Message is required
                    </span>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 bg-primary text-secondary p-2 rounded-md font-medium"
                  >
                    <span>Send me a message</span>
                    {loading ? (
                      <IconLoader className="animate-spin" />
                    ) : (
                      <IconArrowRight />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeSection;
