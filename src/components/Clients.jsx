import React, { useState, useEffect } from "react";
import { clientData } from "../constant/data";
import ClientCard from "./ui/ClientCard";
import icon2 from "../assets/sun-02.svg"
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"

const Clients = () => {

const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? clientData.length - 1 : currentIndex -1;
  setCurrentIndex(newIndex);
}

const nextSlide = () => {
  const isLastSlide = currentIndex === clientData.length -1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
}
const goToSlide = (slideIndex) => {
  setCurrentIndex(slideIndex);
};

useEffect(() => {
  const autoplay = setInterval(() => {
    nextSlide();
  }, 3000); // Change slide every 3 seconds

  return () => clearInterval(autoplay); // Cleanup interval on component unmount
}, [currentIndex]);

return (
  <div className="w-full bg-backgroundLight pt-20 relative group">
    <div className="flex flex-col items-center gap-y-5 text-varDark">
    <img
            src={icon2}
            alt="sun icon"
            className="w-[80px]"
          />
      <p className="text-2xl uppercase text-varDark">Wellness Within Studio</p>
      <h2 className="text-5xl font-headerFont">What Clients are Saying</h2>
      <div className="max-w-[1000px] w-full m-auto relative group">
        {/* Left Arrow */}
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>
        {/* Right Arrow */}
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>
      <div className="max-w-[600px] h-[300px] m-auto py-16 text-center relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {clientData.map((item, index) => (
            <div key={item.id} className="min-w-full">
              <ClientCard item={item} />
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex top-4 justify-center py-2">
          {clientData.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-gray-800' : 'text-gray-400'}`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
};

export default Clients;
