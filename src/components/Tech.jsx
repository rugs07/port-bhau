import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="technology-grid">
      {technologies.map((tech, index) => (
        <div className={`tech-card ${index < 14 ? "simple-design" : ""}`} key={tech.name}>
          <div className="icon-wrapper">
            <img src={tech.icon} alt={tech.name} />
          </div>
          <h3>{tech.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
