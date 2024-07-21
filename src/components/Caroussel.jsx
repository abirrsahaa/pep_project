import { useState } from "react";
import Card4 from "./Card4";

import left from "../assets/chevron-right.png";
import right from "../assets/right.png";

const Caroussel = () => {
  const [index, setIndex] = useState(0);

  const arr = [0, 1, 2];

  const prevv = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? arr.length - 1 : prevIndex - 1));
  };

  const aglaa = () => {
    setIndex((prevIndex) => (prevIndex === arr.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-[375px] mt-[20px] h-[578px] flex flex-col justify-between items-center overflow-hidden relative">
      <div
        className="w-full h-[526px] flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {arr.map((_, idx) => (
          <div className="w-full flex-shrink-0" key={idx}>
            <Card4 />
          </div>
        ))}
      </div>
      <div className="w-[100px] bottom-0 h-[40px] outline flex justify-between items-center">
        <div className="w-[40px] h-[40px] outline flex justify-center items-center">
          <img
            className="w-[32px] h-[32px] object-cover object-center text-black cursor-pointer"
            onClick={prevv}
            src={left}
            alt="Previous"
          />
        </div>
        <div className="w-[40px] h-[40px] outline flex justify-center items-center">
          <img
            className="w-[32px] h-[32px] object-cover object-center text-black cursor-pointer"
            onClick={aglaa}
            src={right}
            alt="Next"
          />
        </div>
      </div>
    </div>
  );
};

export default Caroussel;
