import scrollDown from "../resurses/scrollDown.svg";
import SliderMain from "./SliderMain";
const Main = () => {
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
      <a
        href="#about"
        className=" w-fit block text-white  self-start desk:self-center mb-[10px] transition duration-300 "
      >
        <span className="block font-open  uppercase  text-[12px]">
          the story
        </span>
        <img src={scrollDown} alt="" className="mx-auto " />
      </a>
      <div className="desk:hidden overflow-hidden w-full left-[50%] translate-x-[-50%] top-0  absolute z-[-1]">
        <SliderMain />
      </div>
    </section>
  );
};

export default Main;
