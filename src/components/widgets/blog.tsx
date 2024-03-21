import { MeduimBlog } from "@/types";
import { renderDateEnglish } from "@/utils";
import Link from "next/link";
import { FC } from "react";

const BlogCard: FC<{
  blog: MeduimBlog;
}> = ({ blog }) => {
  return (
    <div className="p-4">
      <Link href={blog.link} target="_blank">
        <div className="relative w-full bg-gray-100 dark:bg-gray-800 rounded-lg items-end overflow-hidden group cursor-pointer">
          <div className="absolute h-[1200px] w-[1200px] rounded-full bg-gray-200 dark:bg-gray-700 top-0 left-0 transition ease-in-out group-hover:-translate-y-1 group-hover:scale-150 duration-300"></div>
          <div className="relative flex flex-col flex-1 p-6 text-left gap-4">
            <div className="text-black dark:text-white font-semibold text-[24px]">
              {blog.title}
            </div>
            <div className="font-medium text-gray-400">
              {renderDateEnglish(blog.created)}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
