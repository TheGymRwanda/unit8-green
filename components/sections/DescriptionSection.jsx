<<<<<<< HEAD
import React, {useState,useEffect, useRef} from 'react';
import Wrapper from '../wrappers/Wrapper';
import Arrow from '../Arrow';
import Button from '../ui/Button';
=======
import React, {useState,useEffect, useRef, useLayoutEffect} from 'react';
import Wrapper from '../wrappers/Wrapper';
import Arrow from '../Arrow';


>>>>>>> 7290780 (feat: adding selection background color)

function DescriptionSection() {
    const desc = {
        '1':{
        'about':"Bloc about us will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale",
        'link':"/link",
        'end':"Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior."   
        },
        '2':{
        'about':"Bloc wat we do will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale",
        'link':"/link",
        'end':"Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior."   
        },
        '3':{
        'about':"Bloc employment will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale",
        'link':"/link",
        'end':"Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior."   
        }
    }
    const [description, setDescription] = useState('1');
    const [show,setShow] = useState(true);
    const targetRef1 = useRef();
    const targetRef2 = useRef();
    const targetRef3 = useRef();
  
    const [width1, setWidth1] = useState({ width1: 0 });
    const [width2, setWidth2] = useState({ width2: 0 });
    const [width3, setWidth3] = useState({ width3: 0 });
  
    const [left1, setLeft1] = useState({ left1: 0 });
    const [left2, setLeft2] = useState({ left2: 0 });
    const [left3, setLeft3] = useState({ left3: 0 });
  
    useEffect(()=>{
     setShow(true)
    },[description])
<<<<<<< HEAD
    useEffect(() => {
=======
    useLayoutEffect(() => {
>>>>>>> 7290780 (feat: adding selection background color)
        if (targetRef1.current) {
          setWidth1({ width1: targetRef1.current.clientWidth });
          setLeft1({ left1: targetRef1.current.offsetLeft });
        }
      }, []);
<<<<<<< HEAD
      useEffect(() => {
=======
      useLayoutEffect(() => {
>>>>>>> 7290780 (feat: adding selection background color)
        if (targetRef2.current) {
          setWidth2({ width2: targetRef2.current.clientWidth });
          setLeft2({ left2: targetRef2.current.offsetLeft });
        }
      }, []);
<<<<<<< HEAD
      useEffect(() => {
=======
      useLayoutEffect(() => {
>>>>>>> 7290780 (feat: adding selection background color)
        if (targetRef3.current) {
          setWidth3({ width3: targetRef3.current.clientWidth });
          setLeft3({ left3: targetRef3.current.offsetLeft });
        }
      }, []);
      const width =
      description === "1"
        ? width1.width1 / 16
        : description === "2"
        ? width2.width2 / 16
        : width3.width3 / 16;
<<<<<<< HEAD
=======
    console.log(width);
>>>>>>> 7290780 (feat: adding selection background color)
    const left =
      description === "1"
        ? left1.left1 / 16
        : description === "2"
        ? left2.left2 / 16
        : left3.left3 / 16;
  return (
    <Wrapper styles='font-normal text-2xl my-8'>
    <>
      <div className="hidden lg:grid grid-cols-3">
        <div />
        <div className="col-span-2">
          <div className="flex gap-8 justify-start relative">
            <button
              onClick={() => setDescription("1")}
              className={`${
                description === "1"
                  ? "text-blue-600 one"
                  : "text-black no-underline"
              }`}
              ref={targetRef1}
            >
              About us
            </button>
            <button
              onClick={() => setDescription("2")}
              className={`${
                description === "2"
                  ? " text-blue-600 two"
                  : "text-black no-underline"
              }`}
              ref={targetRef2}
            >
              What we do
            </button>
            <button
              onClick={() => setDescription("3")}
              className={`${
                description === "3"
                  ? "text-blue-600 three"
                  : "text-black no-underline"
              }`}
              ref={targetRef3}
            >
              Employment
            </button>
            <hr
              style={{ width: `${width}rem`, left: `${left}rem` }}
              className={`absolute top-[100%] h-[.15rem] inline-block bg-blue-600 transition-all duration-200 ease-in-out`}
            />
          </div>
          <div className='my-6'>
            <p>{desc[description].about}</p>
            <Button style='underline hover:no-underline hover:duration-300 ease-in-out'>Learn more</Button>
            <p className='my-6'>{desc[description].end}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:hidden gap-8 justify-start w-full ">
        <div>
          <button
            onClick={() => {
              setDescription("1");
              setShow(!show);
            }}
            className={`${
              description === "1" && show
                ? " text-blue-600 border-b border-blue-500 py-1 stroke-blue-500"
                : "text-black border-b border-black stroke-black"
            } flex justify-between w-full `}
          >
            <span className="whitespace-nowrap font-normal text-2xl">About us</span>
            
            <div
              className={`${
                description === "1" && show && "rotate-180 "
              } duration-500 ease-in-out`}
            ><Arrow/></div>
          </button>
          {description === "1" && show && (
            <div className=" overflow-hidden">
              <p className={`dropdown`}>{desc[description].about}</p>
              <button className="dropdown">Learn more</button>
              <p className="dropdown">{desc[description].end}</p>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              setDescription("2");
              setShow(!show);
            }}
            className={`${
              description === "2" && show
                ? " text-blue-600 border-b border-blue-500 py-1 stroke-blue-500 "
                : "text-black border-b border-black stroke-black"
            } flex justify-between w-full duration-300 ease-in-out`}
          >
            <span className="whitespace-nowrap font-normal text-2xl">What we do</span>
            
            <div
              className={`${
                description === "2" && show && "rotate-180"
              } duration-500 ease-in-out`}
            ><Arrow/></div>
          </button>
          {description === "2" && show && (
            <div className="overflow-hidden font-normal text-2xl">
              <p className="dropdown">{desc[description].description}</p>
              <button className="dropdown">Learn more</button>
              <p className="dropdown">{desc[description].end}</p>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              setDescription("3");
              setShow(!show);
            }}
            className={`${
              description === "3" && show
                ? "text-blue-600 border-b border-blue-500 py-1 stroke-blue-500"
                : "text-black border-b border-black stroke-black"
            } flex justify-between w-full`}
          >
            <span className="whitespace-nowrap font-normal text-2xl">Employment</span>
            
            <div
              className={`${
                description === "3" && show && " rotate-180 "
              } duration-500 ease-in-out`}
            ><Arrow/></div>{" "}
          </button>
          {description == "3" && show && (
            <div className="overflow-hidden">
              <p className="dropdown">{desc[description].description}</p>
              <button className="dropdown">Learn more</button>
              <p className="dropdown">{desc[description].end}</p>
            </div>
          )}
        </div>
      </div>
    </>
  </Wrapper>
  )
}

export default DescriptionSection