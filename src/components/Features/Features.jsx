import React from "react";

import { FaLocationArrow } from "react-icons/fa";
import { FaRoute } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { FaMountainSun } from "react-icons/fa6";
import { GiMountainClimbing } from "react-icons/gi";
import { LuTrees } from "react-icons/lu";

import "./Features.css";

const Features = () => {
  const features = [
    {
      title: "Experienced Guides",
      description:
        "Explore with our knowledgeable and friendly guides who will enhance your travel experience.",
      icon: <FaLocationArrow />,
    },
    {
      title: "Customized Itineraries",
      description:
        "Create your unique adventure with our customizable itineraries tailored to your preferences.",
      icon: <FaRoute />,
    },
    {
      title: "Comfortable Accommodations",
      description:
        "Stay in comfortable and carefully selected accommodations that suit your travel style.",
      icon: <FaBed />,
    },
    {
      title: "Breathtaking Destinations",
      description:
        "Discover stunning and diverse destinations carefully chosen to provide memorable experiences.",
      icon: <FaMountainSun />,
    },
    {
      title: "Adventure Activities",
      description:
        "Participate in thrilling adventure activities to add excitement to your journey.",
      icon: <GiMountainClimbing />,
    },
    {
      title: "Nature Exploration",
      description:
        "Immerse yourself in the beauty of nature with our guided tours and exploration activities.",
      icon: <LuTrees />,
    },
  ];

  return (
    <div className="features">
      <h2>Wander Wise Expeditions Features___</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
