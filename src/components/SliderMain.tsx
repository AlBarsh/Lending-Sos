import { Carousel } from "nuka-carousel";
import { useCarousel } from "nuka-carousel";
import SLide1 from "../resurses/Slide1.jpg";
import SLide3 from "../resurses/Slide3.jpg";
import SLide4 from "../resurses/Slide4.jpg";
import Slide2 from "../resurses/Slide2.jpg";
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";

function cls(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function CustomArrows() {
  const { currentPage, totalPages, wrapMode, goBack, goForward } =
    useCarousel();

  const allowWrap = wrapMode === "wrap";
  const enablePrevNavButton = allowWrap || currentPage > 0;
  const enableNextNavButton = allowWrap || currentPage < totalPages - 1;

  const prevNavClassName = cls(
    "inline-block mr-[55px] h-fit cursor-pointer invisible text-[12px]",
    enablePrevNavButton && "!visible"
  );

  const nextNavClassName = cls(
    "inline-block h-fit vcursor-pointer invisible text-[12px]",
    enableNextNavButton && "!visible"
  );

  return (
    <div className="flex   h-fit w-fit left-[50%] bottom-[4%] absolute z-10">
      <div className={prevNavClassName} onClick={goBack}>
        <VscArrowLeft className=" text-white h-[20px] w-[50px]" />
      </div>
      <div className={nextNavClassName} onClick={goForward}>
        <VscArrowRight className=" text-white h-[20px] w-[50px]" />
      </div>
    </div>
  );
}
export const CustomDots = () => {
  const { totalPages, currentPage, goToPage } = useCarousel();

  const className = (index: number) => {
    let value = "w-3 h-3 p-0 rounded-full border border-white cursor-pointer ";
    if (currentPage === index) {
      value += " bg-white ";
    }
    return value;
  };

  return (
    <div className="flex items-center py-4 gap-1 w-fit left-[55%] bottom-[2%] absolute z-20">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => goToPage(index)}
          className={className(index)}
        />
      ))}
    </div>
  );
};
const SliderMain = () => {
  return (
    <Carousel
      className="  desk:hidden"
      autoplay
      dots={<CustomDots />}
      showDots
      showArrows
      arrows={<CustomArrows />}
    >
      <img className=" " src={SLide1} alt="" />
      <img className="" src={Slide2} alt="" />
      <img className="" src={SLide3} alt="" />
      <img className="" src={SLide4} alt="" />
    </Carousel>
  );
};

export default SliderMain;
