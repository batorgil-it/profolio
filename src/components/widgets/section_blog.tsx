"use client";

import { Blog } from "@/types";
import { FC, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BlogCard from "./blog";
import BlogLoading from "./blog_loading";

const BlogSection: FC = () => {
  const [loading, setLoaidng] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const slider = useRef<Slider>(null);

  useEffect(() => {
    setLoaidng(true);
    fetch("/api/blogs", {
      method: "get",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      cache: "force-cache",
    })
      .then((response) => response.json())
      .then((response) => {
        if (Array.isArray(response)) setBlogs(response as any);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoaidng(false);
      });
  }, []);

  return (
    <div className="text-center w-full flex justify-center">
      <div className="w-full flex flex-col justify-center items-center px-4">
        <div className="font-semibold text-[28px] mb-12">My Blogs</div>
        <div className="md:flex-row w-full px-6">
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
            {loading && <BlogLoading />}
            {loading && <BlogLoading />}
            {loading && <BlogLoading />}
            {!loading &&
              blogs.map((blog) => {
                return <BlogCard key={blog.link[0]} blog={blog} />;
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
