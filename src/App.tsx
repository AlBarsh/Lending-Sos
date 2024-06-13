import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SliderMain from "./components/SliderMain";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Features from "./components/Features";
import Requirements from "./components/Requirements";
import Quotes from "./components/Quotes";
function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const onBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const displayFix = burgerOpen
    ? " fixed desk:px-0 mx-auto  mx-auto  overflow-hidden h-full"
    : " relative desk:px-0 mx-auto  h-full";
  return (
    <div className={displayFix}>
      <div className="desk:bg-slide1 bg-cover bg-center desk:px-[120px]">
        <Header open={burgerOpen} onBurger={onBurger} />
        <Main />
        <div className=" overflow-hidden w-full left-[50%] translate-x-[-50%] top-0  absolute z-[-1] ">
          <SliderMain />
        </div>
      </div>
      <About />
      <Features />
      <Requirements />
      <Quotes />
    </div>
  );
}

export default App;
