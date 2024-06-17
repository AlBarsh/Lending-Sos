import AccordionFeatures from "./AccordionFeatures";

const Features = () => {
  return (
    <section
      id="features"
      className=" bg-slide3 bg-cover pt-[82px] desk:pt-[250px] px-[15px] flex flex-col   items-end desk:items-center min-h-[515px]"
    >
      <div className="text-white uppercase mb-40px desk:mb-[70px] pl-[10px] w-[320px] desk:translate-x-[70%] ">
        <h3 className="text-[18px] desk:text-[24px]">What’s so special?</h3>
        <h1 className="text-[33px] desk:text-[50px]">features</h1>
      </div>
      <div className="w-[320px] desk:w-[450px] mb-[85px] desk:translate-x-[70%] ">
        <AccordionFeatures />
      </div>
    </section>
  );
};

export default Features;
