import React from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-scroll-parallax";
import { SmoothProvider } from "react-scroll-smooth";

const parallex = () => {
  return (
    <SmoothProvider>
      <div className="h-screen overflow-hidden">
        <Parallax y={[-20, 20]} tagOuter="div" className="h-screen">
          <Element name="section1" className="relative h-screen">
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h1 className="text-5xl font-bold text-white">Section 1</h1>
            </div>
          </Element>
        </Parallax>
        <Parallax y={[-20, 20]} tagOuter="div" className="h-screen">
          <Element name="section2" className="relative h-screen">
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h1 className="text-5xl font-bold text-white">Section 2</h1>
            </div>
          </Element>
        </Parallax>
        <Parallax y={[-20, 20]} tagOuter="div" className="h-screen">
          <Element name="section3" className="relative h-screen">
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h1 className="text-5xl font-bold text-white">Section 3</h1>
            </div>
          </Element>
        </Parallax>
        <Parallax y={[-20, 20]} tagOuter="div" className="h-screen">
          <Element name="section4" className="relative h-screen">
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h1 className="text-5xl font-bold text-white">
                Section 4 (with parallax)
              </h1>
            </div>
          </Element>
        </Parallax>
      </div>
    </SmoothProvider>
  );
};

export default parallex;
