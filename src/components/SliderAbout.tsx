import { useCarousel } from "nuka-carousel";
import { Carousel } from "nuka-carousel";
import SLide1 from "../resurses/Slide1.jpg";
import SLide3 from "../resurses/Slide3.jpg";
import SLide4 from "../resurses/Slide4.jpg";
import Slide2 from "../resurses/Slide2.jpg";
const SliderAbout = () => {
  return (
    <Carousel
      autoplay
      showDots
      showArrows
      className="w-[255px] h-[274px] desk:w-[503px] desk:h-[611px]"
    >
      <img className="h-[274px] desk:h-[611px]" src={SLide1} alt="" />
      <img className="object-cover" src={Slide2} alt="" />
      <img className="object-cover" src={SLide3} alt="" />
      <img className="object-cover" src={SLide4} alt="" />
    </Carousel>
  );
};

export default SliderAbout;
