import scrollDown from "../resurses/scrollDown.svg";
import SLide1 from "../resurses/Slide1.jpg";
import SLide3 from "../resurses/Slide3.jpg";
import SLide4 from "../resurses/Slide4.jpg";
import Slide2 from "../resurses/Slide2.jpg";
import { useEffect, useRef, useState } from "react";
import { Carousel } from "nuka-carousel";
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";

const Main = () => {
  const [dotActive, setDotAclive] = useState(0);
  const onDot = (index: number) => {
    setDotAclive(index);
  };
  const onArrowPrev = () => {
    if (dotActive > 0) {
      setDotAclive(dotActive - 1);
    }
  };
  const onArrowNext = () => {
    if (dotActive < 3) {
      setDotAclive(dotActive + 1);
    }
  };

  useEffect(() => {
    let autoplay = setTimeout(function autoplayFunc() {
      console.log(dotActive);

      if (dotActive < 3) {
        myref.current?.goForward();
        onArrowNext();
      } else {
        myref.current?.goToPage(0);
        onDot(0);
      }
      autoplay = setTimeout(autoplayFunc, 3000);
    }, 3000);
    return () => clearTimeout(autoplay);
  });

  const myref = useRef<any>(null);
  const Dots = () => {
    const className = (index: number) => {
      let value =
        "w-3 h-3 p-0 rounded-full border hover:bg-white focus:bg-white border-white cursor-pointer ";
      if (dotActive === index) {
        value += " bg-white ";
      }
      return value;
    };

    return (
      <div className="flex items-center  w-fit ">
        {[0, 1, 2, 3].map((_, index) => (
          <button
            key={index}
            onClick={() => {
              myref.current?.goToPage(index);
              onDot(index);
            }}
            className={className(index)}
          />
        ))}
      </div>
    );
  };
  const displayArrowNext = () => {
    let value = " text-white h-[20px] w-[50px] cursor-pointer";
    if (dotActive > 2) {
      value += " invisible cursor-default";
    }
    return value;
  };
  const displayArrowPrev = () => {
    let value = "text-white h-[20px] w-[50px] cursor-pointer";
    if (dotActive < 1) {
      value += " invisible cursor-default";
    }
    return value;
  };
  return (
    <section
      id="mainScreen"
      className=" px-[15px]  pt-[314px] desk:bg-slide1 bg-cover overflow-hidden bg-center desk:px-[120px]   flex flex-col items-center text-center  h-full"
    >
      <h1 className="font-bebas text-white text-[33px] desk:text-[70px]  tracking-[3px] ">
        SURVIVE AT ALL COSTS
      </h1>
      <h3 className="font-bebas text-white text-[18px] desk:text-[33px] tracking-[2px] uppercase mb-[12px] ">
        Experience new social battle royale game
      </h3>
      <button className="flex font-open font-bold text-[#1A1917] bg-orange hover:bg-white focus:bg-white transition-colors	px-[20px] py-[15px] rounded-[3px] 	mb-[160px]">
        <span className="block pr-[10px] border-r border-[#1A1917] border-opacity-50">
          Buy Now on Steam
        </span>
        <span className="block pl-[10px]">$14.99</span>
      </button>
      <div className=" flex justify-between desk:justify-center w-full">
        <a
          href="#about"
          className=" w-fit block text-white  self-start desk:self-center mb-[10px] transition duration-300 "
        >
          <span className="block font-open  uppercase  text-[12px]">
            the story
          </span>
          <img src={scrollDown} alt="" className="mx-auto " />
        </a>
        <div className=" flex desk:hidden items-center gap-[12px]">
          <button className="cursor-default">
            <VscArrowLeft
              className={displayArrowPrev()}
              onClick={() => {
                myref.current?.goBack();
                onArrowPrev();
              }}
            />
          </button>
          {Dots()}

          <button className="cursor-default">
            <VscArrowRight
              className={displayArrowNext()}
              onClick={() => {
                myref.current?.goForward();

                onArrowNext();
              }}
            />
          </button>
        </div>
      </div>

      <div className="desk:hidden overflow-hidden w-full left-[50%] translate-x-[-50%] top-0  absolute z-[-1]">
        <Carousel
          className=" min-w-[900px]  desk:hidden overflow-hidden w-full left-[50%] translate-x-[-50%]"
          ref={myref}
        >
          <img id="0" className=" " src={SLide1} alt="" />
          <img id="1" className="" src={Slide2} alt="" />
          <img id="2" className="" src={SLide3} alt="" />
          <img id="3" className="" src={SLide4} alt="" />
        </Carousel>
        ;
      </div>
    </section>
  );
};

export default Main;
