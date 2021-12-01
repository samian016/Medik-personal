import React from "react";
import Banner from "./Banner/Banner";
import Nevigation from "./Nevigation/Nevigation";
/* yes this is the header component to show topper components banner and navigation bar */
const Header = () => {
  return (
    <div className=" position-sticky zIndex bg-white top-0 start-0">
      <Banner></Banner>
      <Nevigation></Nevigation>
    </div>
  );
};

export default Header;
