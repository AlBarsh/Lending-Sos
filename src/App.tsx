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
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const onBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const displayFix = burgerOpen
    ? " fixed desk:px-0 mx-auto  mx-auto w-screen overflow-hidden h-full "
    : " relative desk:px-0 mx-auto  h-full";
  return (
    <div className={displayFix}>
      <div className="desk:bg-slide1 bg-cover  bg-center desk:px-[120px] ">
        <div className="desk:hidden overflow-hidden w-full left-[50%] translate-x-[-50%] top-0  absolute z-[-1]">
          <SliderMain />
        </div>
        <Header open={burgerOpen} onBurger={onBurger} />
        <Main />
      </div>
      <About />
      <Features />
      <Requirements />
      <Quotes />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
