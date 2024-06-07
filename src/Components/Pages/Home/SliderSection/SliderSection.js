import React from "react";
import { useEffect, useState } from "react";
import img1 from "../../../../images/slide-img-1.jpg";
import img2 from "../../../../images/slide-img-2.jpg";
import img3 from "../../../../images/slide-img-3.jpg";
import img4 from "../../../../images/slide-img-4.jpg";
import img5 from "../../../../images/slide-img-5.jpg";

const SliderSection = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderImages = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
  ];

  // const sliderImages = [{img: "https://source.unsplash.com/1200x1200/?nature/?1",}, {img: "https://source.unsplash.com/1200x1200/?nature/?2",}, {img: "https://source.unsplash.com/1200x1200/?nature/?3",}, {img: "https://source.unsplash.com/1200x1200/?nature/?4",},];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
    );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className=" w-full mx-auto h-[340px] md:h-[670px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10">
      <div className="relative overflow-hidden">
        {/* arrow */}
        <div className="absolute w-full h-full flex items-center justify-between z-30 px-5">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="flex justify-center items-center bg-warning rounded-full w-8 h-8 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill="#000"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="flex justify-center items-center bg-warning rounded-full w-8 h-8 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#000"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        {/* dots */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {sliderImages.map((_, inx) => (
            <button
              key={inx}
              onClick={() => {
                setCurrentSlider(inx);
              }}
              className={`rounded-full duration-300 bg-white ${
                currentSlider === inx ? "w-10" : "w-2"
              } h-2`}
            ></button>
          ))}
        </div>
        {/* slider container */}
        <div
          className="ease-linear duration-300 flex transform-gpu relative "
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {/* sliders */}
          {sliderImages.map((slide, inx) => (
            <div key={inx} className="min-w-full duration-200 relative">
              <div className="w-full absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-gray-800 from-60% to-gray-200 opacity-[0.7]">
                <h2 className="text-white lg:text-8xl sm:text-2xl md:text-4xl absolute top-[40%] left-[15%] font-extrabold">
                  বুরহানী বি এস আর এম স্কুল
                </h2>
              </div>
              <img
                src={slide.img}
                className="w-full h-72 sm:h-96 md:h-[670px] object-cover "
                alt={`Slider - ${inx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
