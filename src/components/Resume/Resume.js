import React from "react";
import "./Resume.css";
import { Element } from "react-scroll";
import resume from "../../images/resume.pdf";

function Resume() {
  return (
    <Element name="resume">
      <div className="resume">
        {/* <iframe src={resume} frameborder="0"></iframe> */}
        <embed src={resume} type="" />
      </div>
    </Element>
  );
}

export default Resume;
