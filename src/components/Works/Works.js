import React from "react";
import { Element } from "react-scroll";
import "./Works.css";
import estate from "../../images/real-estate.png";
import tesla from "../../images/tesla.png";
import snn from "../../images/snn.png";
import portfolio from "../../images/portfolio.png";
import oyo from "../../images/oyo.png";
import Dockt from "../../images/Dockt.png";
import arrow from "../../images/arrow-down.png";

function Works() {
  return (
    <div>
      <Element name="works" className="works1">
        <div className="works-bg">
          <div className="works__mainHeading">
            <h3>" Love What You Do . Do What You Love "</h3>
            <h4>
              The designer does not begin with some preconceived idea. Rather,
              the idea is the result of careful study and observation, and the
              design a product of that idea.
            </h4>
            <h5>Here's a few work that I'd like to share.</h5>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="works__imageLeft">
          <div className="works__image">
            <img src={estate} alt="real-estate" />
          </div>
          <div className="works__content">
            <h3 className="content-h3">Real Estate Landing Page</h3>
            <h5 className="content-h5">Frontend Developer</h5>
            <h4 className="content-h4">
              An electronic version of the real estate industry, Internet real
              estate is the concept of publishing housing estates for sale or
              rent online, and for consumers seeking to buy or rent properties
              through such platforms.
            </h4>
            <div className="works__buttons">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://rea-estate.netlify.app"
              >
                <button className="works__button">SEE MORE</button>
              </a>
            </div>
          </div>
        </div>
        <div className="works__imageRight">
          <div className="works__content">
            <h3 className="content-h3">Tesla Landing Page Clone</h3>
            <h5 className="content-h5">Frontend Developer</h5>
            <h4 className="content-h4">
              Tesla designs and manufactures electric cars, battery energy
              storage from home to grid-scale, solar panels and solar roof
              tiles, and related products and services.
            </h4>
            <div className="works__buttons">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://jovial-payne-38da49.netlify.app"
              >
                <button className="works__button">SEE MORE</button>
              </a>
            </div>
          </div>
          <div className="works__image">
            <img src={tesla} alt="tesla" />
          </div>
        </div>
        <div className="works__imageLeft">
          <div className="works__image">
            <img src={snn} alt="snn" />
          </div>
          <div className="works__content">
            <h3 className="content-h3">Snn Global</h3>
            <h5 className="content-h5">Frontend Developer</h5>
            <h4 className="content-h4">
              An electronic version of the real estate industry, Internet real
              estate is the concept of publishing housing estates for sale or
              rent online, and for consumers seeking to buy or rent properties
              through such platforms.
            </h4>
            <div className="works__buttons">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://snn-global.netlify.app"
              >
                <button className="works__button">SEE MORE</button>
              </a>
            </div>
          </div>
        </div>

        <div className="works__imageRight">
          <div className="works__content">
            <h3 className="content-h3">OYO Clone Landing Page</h3>
            <h5 className="content-h5">Frontend Developer</h5>
            <h4 className="content-h4">
              OYO is a global platform that empowers entrepreneurs and small
              businesses with hotels and homes by providing full stack
              technology that increases earnings and eases operations.
            </h4>
            <div className="works__buttons">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://oyorooms-clone.netlify.app"
              >
                <button className="works__button">SEE MORE</button>
              </a>
            </div>
          </div>
          <div className="works__image">
            <img src={oyo} alt="oyo" />
          </div>
        </div>
        <div className="works__imageLeft">
          <div className="works__image">
            <img src={portfolio} alt="portfolio" />
          </div>
          <div className="works__content">
            <h3 className="content-h3">Portfolio</h3>
            <h5 className="content-h5">Frontend Developer</h5>
            <h4 className="content-h4">
              A portfolio website provides professional information about an
              individual or a company and presents a showcase of their work
            </h4>
            <div className="works__buttons">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://gokul-portfolio.netlify.app"
              >
                <button className="works__button">SEE MORE</button>
              </a>
            </div>
          </div>
        </div>
        <div className="works__imageRight">
          <div className="works__content">
            <h3 className="content-h3">Dockt Landing Page</h3>
            <h5 className="content-h5">Frontend Developer</h5>
            <h4 className="content-h4">
              Dockt is a Billing software . we create Dockt landing page with
              awsome user interface.
            </h4>
            <div className="works__buttons">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://dockt-head.vercel.app/"
              >
                <button className="works__button">SEE MORE</button>
              </a>
            </div>
          </div>
          <div className="works__image">
            <img src={Dockt} alt="Dockt" />
          </div>
        </div>
      </Element>
    </div>
  );
}

export default Works;
