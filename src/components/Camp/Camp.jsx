import React from "react";
import ImageSlider from "../../components/UIElements/ImageSlider/ImageSlider";

import "./Camp.css";

const Camp = () => {
  const images = [
    require("../../Assets/001.jpg"),
    require("../../Assets/002.jpg"),
    require("../../Assets/003.jpg"),
    require("../../Assets/004.jpg"),
  ];

  return (
    <div className="camp">
      {/* <img src={require("../../Assets/001.jpg")} alt="" />
      <img src={require("../../Assets/002.jpg")} alt="" />
      <img src={require("../../Assets/003.jpg")} alt="" />
      <img src={require("../../Assets/004.jpg")} alt="" />
    */}
      <div>
        <ImageSlider images={images} />
      </div>
    </div>
  );
};

export default Camp;
