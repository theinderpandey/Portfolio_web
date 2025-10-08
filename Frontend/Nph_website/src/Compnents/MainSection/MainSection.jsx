import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainSection.css";

const MainSection = () => {
return (
<main className="main-section py-5 bg-white text-dark">
{/* About Section */}
<section id="about" className="about-section container text-center mb-5">
<h2 className="section-title mb-3">About Us</h2>
<p className="lead">
At <span className="fw-bold section-title">NPG Software Solutions</span>, we turn your ideas into reality through innovative and scalable software products. Our team specializes in crafting user-friendly websites, dynamic web applications, and custom software tailored to your business needs.
</p>
</section>
  {/* Services Section */}
  <section id="services" className="services-section container text-center">
    <h2 className="section-title mb-4 ">Our Services</h2>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="service-card p-4 h-100 bg-red bg-opacity-25 rounded-4 shadow-sm">
          <h4 className="fw-bold mb-3">Web Development</h4>
          <p>
            Build modern, responsive, and high-performance websites that
            represent your brand perfectly.
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-card p-4 h-100 bg-red bg-opacity-25 rounded-4 shadow-sm">
          <h4 className="fw-bold mb-3">App Development</h4>
          <p>
            Create mobile and web apps with clean UI, fast performance, and
            seamless user experience.
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-card p-4 h-100 bg-red bg-opacity-25 rounded-4 shadow-sm">
          <h4 className="fw-bold mb-3">Digital Solutions</h4>
          <p>
            From SEO to automation — we help your business grow with
            powerful digital transformation strategies.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>
);
};

export default MainSection;