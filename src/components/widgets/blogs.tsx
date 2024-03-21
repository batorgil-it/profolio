"use client";

import { MeduimBlog } from "@/types";
import { FC, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "./blog";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const Blogs: FC = () => {
  const [blogs, setBlogs] = useState<MeduimBlog[]>([]);
  const slider = useRef<Slider>(null);
  //  slider?.current?.slickPrev();
  //  slider?.current?.slickNext();

  useEffect(() => {
    fetch("https://v1.nocodeapi.com/batorgil/medium/sUYRoUHoNdwtKNPI", {
      method: "get",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((response) => setBlogs(response as any))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="text-center w-full flex justify-center">
      <div className="w-full flex flex-col justify-center items-center px-4">
        <div className="font-semibold text-[28px] mb-12">My Blogs</div>
        <div className="md:flex-row w-full">
          <Slider
            ref={slider}
            dots={false}
            infinite
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1,
                },
              },
            ]}
          >
            {blogs.map((blog) => {
              return <BlogCard key={blog.link} blog={blog} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
