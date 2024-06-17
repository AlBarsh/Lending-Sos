import logo from "../resurses/logo.svg";
import facebook from "../resurses/facebook.svg";
import twitter from "../resurses/twitter.svg";
import youtube from "../resurses/youtube.svg";
import twitch from "../resurses/twitch.svg";

const Footer = () => {
  return (
    <section className="bg-black px-[15px] desk:px-[120px]">
      <div className="flex flex-col desk:flex-row gap-[42px] desk:justify-between desk:items-center  py-[29px] border-b border-white border-opacity-30">
        <img src={logo} alt="" className="mx-auto desk:mx-0" />
        <nav className="desk:h-fit">
          <ul className="text-white text-[12px] font-bold flex flex-wrap desk:flex-nowrap	 gap-x-[30px] desk:gap-x-[22px]  gap-y-[20px] desk:gap-y-0 desk:h-fit justify-center">
            <li className="">
              <a
                className=" hover:text-orange focus:text-orange transition-colors "
                href="#mainScreen"
              >
                MAIN
              </a>
            </li>
            <li className="">
              <a
                className=" hover:text-orange focus:text-orange transition-colors "
                href="#about"
              >
                ABOUT
              </a>
            </li>
            <li className="">
              <a
                className=" hover:text-orange focus:text-orange transition-colors "
                href="#features"
              >
                GAME FEATURES
              </a>
            </li>
            <li className="">
              <a
                className=" hover:text-orange focus:text-orange transition-colors "
                href="#system"
              >
                SYSTEM REQUIREMENTS
              </a>
            </li>
            <li className="">
              <a
                className=" hover:text-orange focus:text-orange transition-colors "
                href="#quotes"
              >
                QOUTES
              </a>
            </li>
          </ul>
        </nav>

        <div className=" flex justify-center gap-[53px]">
          <button>
            <img src={facebook} alt="" />
          </button>
          <button>
            <img src={twitter} alt="" />
          </button>
          <button>
            <img src={youtube} alt="" />
          </button>
          <button>
            <img src={twitch} alt="" />
          </button>
        </div>
      </div>
      <div className="pt-[20px] pb-[63px] text-white flex flex-col desk:flex-row items-center desk:justify-between gap-y-[30px] [text-12px]">
        <span className=" opacity-30 text-center">
          © 2018 Outpost Games, Inc. All Rights Reserved
        </span>
        <div className="flex flex-col desk:flex-row desk:gap-[10px] items-center gap-y-[20px] font-bold">
          <a href="">Privacy Policy </a>
          <a href="">| Terms of Services |</a>
          <a href="">Code of Conduct</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
