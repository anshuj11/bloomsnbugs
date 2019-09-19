import React from "react";
import Sidebar from "./sidebar_container";

const About = () => {
  return (
    <div className="MainPage">
      <Sidebar />
      <div className="TextSpace">
        <div className="StandardText">
          Blooms And Bugs is a little girls clothing store run by a mom of a
          toddler. After sewing a lot of clothes for my own daughter I decide to
          take it to the next level and sell handmade clothes. Blooms and Bugs
          sells unique handmade baby and kids party dresses and costumes. Right
          now we are offering beautiful tutu dresses, pettiskirts and Halloween
          costumes for little girls in a dazzling array of colors. We also love
          custom orders so do get in touch to get something unique made for your
          little one.
        </div>
      </div>
    </div>
  );
};

export default About;
