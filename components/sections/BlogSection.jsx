import React, {useEffect, useState, useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import Card from '../ui/Card';
import BLOGS from '../../data/blogs';

const BlogSection = () => {
  const blogSect = useRef()
  const blogRef = useRef(0)
  const [scroll, setScroll] = useState(false);
  const [blogs, setBlogs] = useState(BLOGS);
  const clickHandler=()=>setScroll(!scroll)
    const [screen, setScreen] = useState(0)
    useEffect(()=>{
        setScreen(innerWidth)
    },[])

    useEffect(()=>{
      setBlogs(()=>[...blogs,BLOGS[blogRef.current]])
      blogRef.current++
      if(blogRef.current>=BLOGS.length){
        blogRef.current = 0
      }
    },[scroll])
  return (
    <div ref={blogSect} onScroll={()=>{
      setBlogs(()=>[...blogs,BLOGS[blogRef.current]])
      blogRef.current++
      if(blogRef.current>=BLOGS.length){
        blogRef.current = 0
      }
      console.log(blogRef.current.length)
      console.log('hello',blogSect.getBoundingClientRect)
      
    }
    } className='w-full overflow-x-auto bg-blue-300'>
    <div className='flex gap-6  mx-auto max-w-90'>
      {/* {BLOGS.map((blog,index)=><div key={index}><Card {...blog}/></div>)} */}
      <div className={` bg-red-500 relative duration-300 ease-in-out ${scroll?'-translate-x-[40%]':'translate-x-[0%]'}  overflow-x-visible scrollbar-hide mr-auto`}>
          <div className="inline-flex gap-8">
            {/* <div className='absolute top-0 left-0 flex w-[400%] gap-8 snap-none'> */}

            {blogs.map((blog,index)=><div key={index}><Card {...blog}/></div>)}
          </div>
        </div>
      </div>
          <div className="hidden lg:flex gap-8 py-16">
              <button>
            <div className="">
              
              
            </div>
              </button>
              <button onClick={clickHandler}>
            <div>
            </div>
                </button>
          </div>
    </div>
  )
}

export default BlogSection