import SliderAbout from "./SliderAbout";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col desk:flex-row bg-bgimg1 bg-cover px-[15px] pt-[20px] desk:pt-[200px] ">
        <div className="flex flex-col desk:mr-[18px]">
          <div className=" border-b font-bebas border-white desk:pt-[55px]">
            <h3 className="text-white text-[18px] desk:text-[24px] uppercase">
              {" "}
              whai is sos?
            </h3>
            <h1 className=" text-white  text-[33px] desk:text-[50px] uppercase tracking-[3px] mb-[15px]">
              social battle royale game
            </h1>
          </div>
          <div className=" text-white text-[14px] font-open desk:text-[18px] mt-[26px] desk:mt-[60px] mb-[50px] desk:self-end ">
            <p className="mb-[15px]">
              Each round, you and 15 other contestants compete to escape a
              deadly island filled with monsters. The trick is: three people can
              survive. Will you run solo or form friendships with others to
              escape?
            </p>
            <p>
              Making the right decisions could be the difference between life
              and death.
            </p>
          </div>
        </div>
        <div className=" mb-[36px] mx-auto">
          <SliderAbout />
        </div>
      </div>
    </section>
  );
};

export default About;
