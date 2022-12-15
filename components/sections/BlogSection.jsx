import React, { useState, useRef } from "react";
import Card from "../ui/Card";
import BLOGS from "../../data/blogs";
import Arrow from "../Arrow";

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
      <div className="flex gap-8 w-[1440px] max-w-[90%] mx-auto">
        <h1 className="text-xl font-medium font">Blog</h1>
        <button onClick={()=>{blogSect.current.scrollLeft +=350}} className="bg-red-500">
        <Arrow />
        </button>
        <button onClick={()=>{blogSect.current.scrollLeft -=350}} className="bg-green-600">
        <Arrow />
        </button>
      
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
