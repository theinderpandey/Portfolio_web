import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const textBeforeCompany = "Welcome to "; // Text to animate
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(textBeforeCompany.slice(0, index + 1));
      index++;
      if (index === textBeforeCompany.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section d-flex align-items-center text-center text-md-start">
      <div className="container">
        <div className="row justify-content-center justify-content-md-start align-items-center min-vh-100">
          <div className="col-12 col-md-8 col-lg-6">
            <h1 className="hero-title display-5 display-md-4 fw-bold">
              {typedText}
              <span className="glow-text">NPG Software Solutions</span>
            </h1>
            <p className="hero-subtitle lead my-3 my-md-4">
              Empowering your business with innovative web solutions.
            </p>
            <div className="hero-buttons d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
              <a href="#contact" className="btn btn-danger btn-lg">
                Get Started
              </a>
              <a href="#services" className="btn btn-danger btn-lg">
                View Services
              </a>
              <a href="#portfolio" className="btn btn-danger btn-lg">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
