import logo from "../resurses/logo.svg";
import SelectLang from "./SelectLang";
import Burger from "./Burger";
import xbox from "../resurses/xbox.svg";
import steam from "../resurses/steam.svg";
import { useState } from "react";
const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const onBurger = () => {
    setBurgerOpen(!burgerOpen);
  };
  const navActiv = burgerOpen
    ? " fixed  left-0 top-[-100vh] flex flex-col w-[100%] h-[100vh] bg-black opacity-75 transition duration-300 ease-in-out  translate-y-[106vh] desk:h-fit"
    : " fixed  left-0 top-[-100vh] flex flex-col w-[100%] h-[100vh] bg-black opacity-75 transition duration-300 ease-in-out desk:static desk:bg-transparent desk:h-fit";
  const headerActive = burgerOpen
    ? "  w-full  left-0 h-[52px] mb-[180px]  pt-[10px] flex justify-between bg-black desk:bg-transparent "
    : "  w-full left-0 h-[52px] mb-[180px]   pt-[10px] flex justify-between";

  return (
    <div className={headerActive}>
      <img src={logo} alt="" />
      <div className="flex desk:items-center">
        <nav className={navActiv}>
          <ul className="h-full desk:flex desk:gap-[35px] font-bold desk:h-fit desk:w-fit">
            <li className="text-white">
              <a href="">MAIN</a>
            </li>
            <li className="text-white">
              <a href="">ABOUT</a>
            </li>
            <li className="text-white">
              <a href="">GAME FEATURES</a>
            </li>
            <li className="text-white">
              <a href="">SYSTEM REQUIREMENTS</a>
            </li>
            <li className="text-white">
              <a href="">QOUTES</a>
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
          <Burger open={burgerOpen} onBurger={onBurger} />
        </div>
      </div>
    </div>
  );
};

export default Header;
