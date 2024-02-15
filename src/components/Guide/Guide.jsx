import React from "react";

import "./Guide.css";

const Guide = () => {
  return (
    <div className="guide">
        <div className="guide_text">
            <div className="guide_text-left">
                <h1>We're here to help</h1>
            </div>

            <div className="guide_text-right">
                <p>
                Embark on a journey with our expert guides at WanderWise Expeditions.
                In the vast tapestry of destinations, where every corner holds a
                unique story, we are your compass, your storyteller, and your
                companion. 'Lost anywhere, we're here to help' is not just a tagline;
                it's our promise to turn your wanderwise into a seamless exploration.
                </p>
            </div>

        </div>

      <div className="guide-img">
        <img src={require("../../Assets/guide.jpg")} alt="" />
      </div>

      
    </div>

  );
};

export default Guide;
