import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SliderMain from "./components/SliderMain";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const onBurger = () => {
    if (window.innerWidth < 1024) {
      setBurgerOpen(!burgerOpen);
    }
  };

  const displayFix = burgerOpen
    ? " fixed  desk:px-0 mx-auto  mx-auto w-screen overflow-hidden h-full "
    : " relative desk:px-0 mx-auto  h-full";
  return (
    <div className={displayFix}>
      <Header open={burgerOpen} onBurger={onBurger} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
