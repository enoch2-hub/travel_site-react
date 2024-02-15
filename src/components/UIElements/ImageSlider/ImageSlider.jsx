import React, {  useState } from "react";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     nextSlide();
  //   }, 3000);
  // }, []);

  return (
    <div>
      <button onClick={prevSlide}>
        <FaArrowAltCircleLeft />
      </button>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button onClick={nextSlide}>
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
};

export default ImageSlider;
