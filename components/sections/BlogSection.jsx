import React, { useState, useRef } from "react";
import Image from "next/image";
import Card from "../ui/Card";
import BLOGS from "../../data/blogs";
import arrow from "../../public/assets/images/arrow.svg"

const BlogSection = () => {
  const blogSect = useRef(null)
  const blogRef = useRef(0);
  const [blogs, setBlogs] = useState(BLOGS);
  const generateInfinite = () => {
    setBlogs(() => [...blogs, BLOGS[blogRef.current]]);
    blogRef.current++;
    if (blogRef.current >= BLOGS.length) {
      blogRef.current = 0;
    }
  };
  return (
    <div className="">
      <div className="flex gap-8 w-[1440px] max-w-[90%] mx-auto mb-8">
        <h1 className="text-xl font-medium text-gray-400">Blog</h1>
        <div className="hidden desktop:block">
          <button onClick={() => { blogSect.current.scrollLeft -= 350 }}>
            <Image alt="arrow" src={arrow} />
          </button>
          <button onClick={() => { blogSect.current.scrollLeft += 350 }}>
            <Image alt="arrow" src={arrow} />
          </button>
        </div>
      </div>
      <div
        ref={blogSect}
        onScroll={generateInfinite}
        className="w-full overflow-x-auto scrollbar-hide smooth-scroll ease-in-out duration-300"
      >
        <div className="flex gap-6  mx-auto w-[1440px] max-w-[90%]">
          <div>
            <div className="inline-flex gap-8">
              {blogs.map((blog, index) => (
                <div className="" key={index}>
                  <Card {...blog} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div></div>
  );
};

export default BlogSection;
