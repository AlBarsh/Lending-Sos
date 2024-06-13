import scrollDown from "../resurses/scrollDown.svg";
import { CustomDots } from "./SliderMain";
const Main = () => {
  return (
    <>
      <main className="relative z-0 flex flex-col items-center text-center  h-fit">
        <h1 className="font-bebas text-white text-[33px]  tracking-[3px] ">
          SURVIVE AT ALL COSTS
        </h1>
        <h3 className="font-bebas text-white text-[18px] tracking-[2px] uppercase mb-[12px] ">
          Experience new social battle royale game
        </h3>
        <button className="flex bg-orange  mb-[160px] py-[12px] px-[7px] rounded-[3px]">
          <span className="block">Buy Now on Steam</span>
          <span className="block">$14.99</span>
        </button>
        <a
          href="#about"
          className=" w-fit block self-start desk:self-center mb-[10px] transition duration-300 "
        >
          <span className="block text-white uppercase font-bebas text-[12px]">
            the story
          </span>
          <img src={scrollDown} alt="" className="mx-auto" />
        </a>
      </main>
    </>
  );
};

export default Main;
