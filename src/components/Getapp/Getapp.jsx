import React from "react";

import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import "./Getapp.css";

const Getapp = () => {
  return (
    <div className="getapp">
      <div className="getapp-banner">
        <img
          className="getapp-background-img"
          src={require("../../Assets/background.png")}
          alt=""
        />
        <section className="getapp-banner-text">
          <h1>Get the app</h1>
          <button className="getapp-btn-ios">
            <FaAppStore /> App Store
          </button>
          <button className="getapp-btn-android">
            <IoLogoGooglePlaystore /> Play Store
          </button>
        </section>

        <section className="getapp-banner-img">
          <img src={require("../../Assets/getapp.jpg")} alt="" />
        </section>
      </div>
    </div>
  );
};

export default Getapp;
