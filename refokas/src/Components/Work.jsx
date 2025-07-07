import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "65%",
      left: "60%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  function imagesShow(arr) {
    setImages((prev) =>
      prev.map((item, index) => ({
        ...item,
        isActive: arr.includes(index),
      }))
    );
  }

  useMotionValueEvent(scrollYProgress, "change", (data) => {
    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 5:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      default:
        break;
    }
  });

  return (
    <div className="relative w-full">
      <div className="w-full">
        <div className="relative max-w-screen-xl mx-auto justify-center text-center">
          <h1 className="text-[16vw] md:text-[20vw] lg:text-[30vw] leading-none font-medium select-none tracking-tight break-words">
            work
          </h1>
        </div>
      </div>
      {/* Floating images: hidden on mobile, visible on md+ */}
      <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
        {images.map(
          (elem, index) =>
            elem.isActive && (
              <img
                key={index}
                className="hidden md:block absolute w-32 md:w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                style={{ top: elem.top, left: elem.left }}
                src={elem.url}
                alt={`work-${index}`}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Work;
