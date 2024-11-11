import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a passionate developer constantly learning new skills and improving my work.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
