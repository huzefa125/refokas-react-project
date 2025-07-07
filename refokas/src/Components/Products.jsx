import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from "../assets/arqitel.mp4";
import ttr from "../assets/ttr.mp4";
import yir from "../assets/yir.mp4";
import yahoo from "../assets/yahoo.mp4";
import rainfall from "../assets/rainfall.mp4";

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-16 md:mt-32 relative px-2 md:px-0">
      <div className="flex flex-col gap-6 md:gap-0">
        {products.map((val, index) => (
          <Product key={index} val={val} mover={mover} count={index} />
        ))}
      </div>
      {/* Responsive video window */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window w-[90vw] max-w-lg md:w-[32rem] md:h-[23rem] h-[50vw] max-h-[23rem] rounded-3xl overflow-hidden shadow-lg"
        >
          {[arqitel, ttr, yir, yahoo, rainfall].map((src, idx) => (
            <motion.div
              key={src}
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full"
            >
              <video
                className="absolute object-cover rounded-3xl w-full h-full"
                autoPlay
                muted
                loop
                src={src}
              ></video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;