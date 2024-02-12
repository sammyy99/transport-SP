// Homepage.js
import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import MainContainer from "./MainContainer";

const Homepage = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="grid grid-cols-12 h-screen bg-slate-200">
        <Menu />
        <MainContainer />
      </div>
    </div>
  );
};

export default Homepage;
