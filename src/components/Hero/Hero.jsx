import React, { useState } from "react";
import StarRating from "../UIElements/StarRating/StarRating";

import "./Hero.css";

const Hero = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const submitReview = () => {
    // Handle submitting the review with the selected rating
    console.log(`Submitted review with rating: ${rating}`);
  };

  return (
    <div className="hero">
      <div className="hero-1">
        <h1 className="hero-title">WanderWise Expeditions</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          esse recusandae repellat quas commodi aliquam beatae, dolores porro
          consequatur sint nulla eligendi laudantium optio nihil, vel ex
          exercitationem, impedit assumenda?
        </p>

        <div className="hero-rating">
          <h2>Leave a Review</h2>
          <StarRating initialRating={rating} onChange={handleRatingChange} />
          <button onClick={submitReview}>Submit Review</button>
        </div>
      </div>

      <div className="hero-2">
        <img src={require("../../Assets/017.jpg")} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
