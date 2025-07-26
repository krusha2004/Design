import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Banner.css";
import image1 from '../image/image1.png';
import image2 from '../image/image2.png';
import image3 from '../image/image3.png';
import image4 from '../image/image4.png';

const sliderItems = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
];

const Banner = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const handlePrev = () => {
    setDirection(-1);
    setSliderIndex((prev) => (prev === 0 ? sliderItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setSliderIndex((prev) => (prev === sliderItems.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="home" className="slider">
      <button onClick={handlePrev} className="slider-btn left">❮</button>

      <div className="slider-image-wrapper">
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={sliderItems[sliderIndex].id}
            src={sliderItems[sliderIndex].image}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="slider-image"
          />
        </AnimatePresence>
      </div>

      <div className="dots">
        {sliderItems.map((item, i) => (
          <span
            key={item.id}
            className={`dot ${i === sliderIndex ? "active" : ""}`}
            onClick={() => {
              setDirection(i > sliderIndex ? 1 : -1);
              setSliderIndex(i);
            }}
          />
        ))}
      </div>

      <button onClick={handleNext} className="slider-btn right">❯</button>
    </section>
  );
};

export default Banner;
