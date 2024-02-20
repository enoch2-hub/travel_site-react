import React, { useState, useEffect } from "react";
import ImageSlider from "../../components/UIElements/ImageSlider/ImageSlider";

import "./Camp.css";

const Camp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    require("../../Assets/001.jpg"),
    require("../../Assets/002.jpg"),
    require("../../Assets/003.jpg"),
    require("../../Assets/004.jpg"),
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="camp">
      {/* <img src={require("../../Assets/001.jpg")} alt="" />
      <img src={require("../../Assets/002.jpg")} alt="" />
      <img src={require("../../Assets/003.jpg")} alt="" />
      <img src={require("../../Assets/004.jpg")} alt="" />
    */}

      {/* <div>
        <ImageSlider images={images} />
      </div> */}

      <div className="carousel-container">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control prev" onClick={prevSlide}>
          &#9665;
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          &#9655;
        </button>
      </div>
    </div>
  );
};

export default Camp;
