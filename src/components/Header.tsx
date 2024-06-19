import logo from "../resurses/logo.svg";
import SelectLang from "./SelectLang";
import Burger from "./Burger";
import xbox from "../resurses/xbox.svg";
import steam from "../resurses/steam.svg";
import { BurgerProps } from "./Burger";
import { useState } from "react";
const Header = (props: BurgerProps) => {
  const navActiv = props.open
    ? " absolute z-50  px-[30px] pt-[100px]  left-0 top-[-100vh] flex flex-col w-[100vw] h-[100vh] bg-black opacity-80 transition duration-300 ease-in-out  translate-y-[107vh] desk:h-fit"
    : " absolute  left-0 top-[-100vh] flex flex-col w-[100%] h-[100vh] bg-black opacity-75 transition duration-300 ease-in-out desk:static desk:bg-transparent desk:h-fit";
  const headerActive = props.open
    ? " px-[15px]  relative font-open  h-[7vh] mb-[180px]  pt-[10px] flex justify-between bg-black desk:bg-transparent "
    : " px-[15px] relative font-open h-[7vh] mb-[180px]   pt-[10px] flex justify-between";

  return (
    <div className={headerActive}>
      <img src={logo} alt="" />
      <div className="flex desk:items-center ">
        <nav className={navActiv}>
          <ul className="h-full w-[280px] text-[25px] flex flex-col gap-[35px] desk:flex-row font-bold desk:h-fit desk:w-fit desk:text-[12px]">
            <li className="text-white">
              <a
                className=" hover:text-orange focus:text-orange transition-colors "
                href="#mainScreen"
              >
                MAIN
              </a>
            </li>
            <li className="text-white">
              <a
                className=" hover:text-orange focus:text-orange transition-colors "
                href="#about"
              >
                ABOUT
              </a>
            </li>
            <li className="text-white">
              <a
                className=" hover:text-orange focus:text-orange transition-colors "
                href="#features"
              >
                GAME FEATURES
              </a>
            </li>
            <li className="text-white">
              <a
                className=" hover:text-orange focus:text-orange transition-colors "
                href="#system"
              >
                SYSTEM REQUIREMENTS
              </a>
            </li>
            <li className="text-white">
              <a
                className=" hover:text-orange focus:text-orange transition-colors "
                href="#quotes"
              >
                QOUTES
              </a>
            </li>
            <li className="flex gap-[20px] desk:hidden">
              <a
                className=" hover:text-orange focus:text-orange transition-colors "
                href=""
              >
                <img className="h-[30px] w-[30px]" src={xbox} alt="" />
              </a>
              <a
                className=" hover:text-orange focus:text-orange transition-colors "
                href=""
              >
                <img src={steam} alt="" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex">
          <SelectLang />
          <div className=" hidden desk:flex gap-[17px] items-center ">
            <button className="h-fit w-fit">
              <img className="h-[30px] w-[30px]" src={xbox} alt="" />
            </button>
            <button className="h-[30px] w-[30px]">
              <img className="h-fit w-fit" src={steam} alt="" />
            </button>
          </div>
          <Burger open={props.open} onBurger={props.onBurger} />
        </div>
      </div>
    </div>
  );
};

export default Header;
