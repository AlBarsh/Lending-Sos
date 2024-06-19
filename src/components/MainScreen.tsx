import scrollDown from "../resurses/scrollDown.svg";

const Main = () => {
  return (
    <section
      id="mainScreen"
      className=" px-[15px]    flex flex-col items-center text-center  h-full"
    >
      <h1 className="font-bebas text-white text-[33px] desk:text-[70px]  tracking-[3px] ">
        SURVIVE AT ALL COSTS
      </h1>
      <h3 className="font-bebas text-white text-[18px] desk:text-[33px] tracking-[2px] uppercase mb-[12px] ">
        Experience new social battle royale game
      </h3>
      <button className="flex font-open font-bold bg-orange hover:bg-white focus:bg-white transition-colors	 py-[12px] px-[7px] rounded-[3px] 	mb-[160px]">
        <span className="block">Buy Now on Steam</span>
        <span className="block">$14.99</span>
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
    </section>
  );
};

export default Main;
