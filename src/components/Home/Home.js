import React, { useState } from "react";
import { Element } from "react-scroll";
import "./Home.css";
import boy1 from "../../images/A_Boy.svg";
import About from "../About/About";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Element name="hello">
      <div className="home">
        <div className="home__left">
          <h3>
            Hello there! <br /> I'm Gokul
          </h3>
          <h4>
            Enthusiastic front-end developer, skilled in Javascript and ReactJs.
            <b>
              {" "}
              Seeking opportunity to deliver high-quality Front-end products.
            </b>{" "}
            I can show my talent and enhance my skills to meet company goals.
          </h4>
          <button className="home__button" onClick={togglePopup}>
            ABOUT ME
          </button>
          {isOpen && <About handleClose={togglePopup} />}
        </div>
        <div className="home__right">
          <img src={boy1} alt="" />
        </div>
      </div>
    </Element>
  );
}

export default Home;
