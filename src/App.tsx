import React from "react";
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
  return (
    <div className=" desk:px-0 mx-auto relative overflow-hidden h-full">
      <div className="px-[15px]  desk:bg-slide1 bg-cover bg-center desk:px-[120px]">
        <Header />
        <Main />
        <div className=" min-w-[900px] w-full left-[50%] translate-x-[-50%] top-0  absolute z-[-1] ">
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
