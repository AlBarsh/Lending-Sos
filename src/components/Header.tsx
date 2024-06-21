import logo from "../resurses/logo.svg";
import SelectLang from "./SelectLang";
import Burger from "./Burger";
// import xbox from ;
import { ReactComponent as Xbox } from "../resurses/xbox.svg";
import { ReactComponent as Steam } from "../resurses/steam.svg";
import { BurgerProps } from "./Burger";
import { useState } from "react";
import { X } from "lucide-react";
const Header = (props: BurgerProps) => {
  const navActiv = props.open
    ? " absolute z-30  px-[30px] pt-[100px]  left-0 top-[-100vh] flex flex-col w-[100vw] h-[100vh] bg-black opacity-80 transition duration-300 ease-in-out  translate-y-[107vh] desk:h-fit"
    : " absolute  left-0 top-[-100vh] flex flex-col w-[100%] desk:w-fit h-[100vh] bg-black opacity-75 transition duration-300 ease-in-out desk:static desk:bg-transparent desk:h-fit";
  const headerActive = props.open
    ? " px-[15px] z-40 absolute font-open items-center h-[7vh] w-full  pt-[10px] flex justify-between bg-black desk:bg-transparent "
    : " px-[15px] z-40 absolute font-open h-[7vh] items-center  w-full  pt-[10px] flex justify-between";

  return (
    <div className={headerActive}>
      <img src={logo} alt="" />

      <nav className={navActiv}>
        <ul className="h-full w-[280px] text-[25px] flex flex-col gap-[35px] desk:flex-row font-bold desk:h-fit desk:w-fit desk:text-[12px]">
          <li className="text-white">
            <a
              className=" hover:text-orange focus:text-orange transition-colors "
              href="#mainScreen"
              onClick={() => props.onBurger()}
            >
              MAIN
            </a>
          </li>
          <li className="text-white">
            <a
              className=" hover:text-orange focus:text-orange transition-colors "
              href="#about"
              onClick={() => props.onBurger()}
            >
              ABOUT
            </a>
          </li>
          <li className="text-white">
            <a
              className=" hover:text-orange focus:text-orange transition-colors "
              href="#features"
              onClick={() => props.onBurger()}
            >
              GAME FEATURES
            </a>
          </li>
          <li className="text-white">
            <a
              className=" hover:text-orange focus:text-orange transition-colors "
              href="#system"
              onClick={() => props.onBurger()}
            >
              SYSTEM REQUIREMENTS
            </a>
          </li>
          <li className="text-white">
            <a
              className=" hover:text-orange focus:text-orange transition-colors "
              href="#quotes"
              onClick={() => props.onBurger()}
            >
              QOUTES
            </a>
          </li>
          <li className="flex gap-[20px] desk:hidden">
            <a href="" onClick={() => props.onBurger()}>
              <Xbox className="transition-colors focus:fill-white hover:fill-white fill-[#FFB548]" />
            </a>
            <a href="" onClick={() => props.onBurger()}>
              <Steam className="transition-colors focus:fill-white hover:fill-white fill-[#FFB548]" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <SelectLang />
        <div className=" hidden desk:flex gap-[17px] items-center ">
          <button className="h-fit w-fit">
            <Xbox className="h-[30px] w-[30px] transition-colors focus:fill-white hover:fill-white fill-[#FFB548]" />
          </button>
          <button className="h-fit w-fit">
            <Steam className="h-[30px] w-[30px] transition-colors focus:fill-white hover:fill-white fill-[#FFB548]" />
          </button>
        </div>
        <Burger open={props.open} onBurger={props.onBurger} />
      </div>
    </div>
  );
};

export default Header;
