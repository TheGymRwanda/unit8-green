import React, { useState, useRef } from "react";
import Image from "next/image";
import Card from "../ui/Card";
import BLOGS from "../../data/blogs";
import leftArrow from "../../public/assets/images/leftArrow.svg"
import leftArrow2 from "../../public/assets/images/leftArrow-2.svg"
import rightArrow from "../../public/assets/images/rightArrow.svg"
import rightArrow2 from "../../public/assets/images/rightArrow-2.svg"

const BlogSection = () => {
  const blogSect = useRef(null)
  const blogRef = useRef(0);
  const prevPosition = useRef(0)
  const [blogs, setBlogs] = useState(BLOGS);
  const [position,setPosition] = useState(0)
  const generateInfinite = (e) => {
    setPosition(()=>e.target.scrollLeft)
    if(position-prevPosition.current>=302){
      prevPosition.current = position
      setBlogs(() =>[...blogs, BLOGS[blogRef.current]])
      blogRef.current++;
      if (blogRef.current >= BLOGS.length) {
        blogRef.current = 0;
      }
    }
    else if(prevPosition.current-position>302&&BLOGS.length<blogs.length){
        prevPosition.current = position
         blogs.pop()
         setBlogs(()=>blogs);
        }
  };
  return (
    <div className="">
      <div className="flex gap-8 w-[1440px] max-w-[90%] mx-auto mb-8">
        <h1 className="text-xl font-medium text-gray-400">Blog</h1>
        <div className="hidden desktop:flex w-16 justify-between">
          <button onClick={() => { blogSect.current.scrollLeft -= 302 }}>
            {position<=0?
              <Image alt="arrow" src={leftArrow} />:<Image alt="arrow" src={leftArrow2} />}
          </button>
          <button onClick={() => { blogSect.current.scrollLeft += 302 }}>
           <Image alt="arrow" src={rightArrow2} />
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
