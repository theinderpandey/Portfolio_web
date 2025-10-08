import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
return (
<footer className="footer bg-black text-light pt-5 pb-3">
<div className="container">
<div className="row gy-4">
{/* Company Info */}
<div className="col-md-4 text-center text-md-start">
<h4 className="footer-title text-danger mb-3">NPG Software Solutions</h4>
<p className="small">
Empowering businesses with custom software, web, and digital solutions.
We combine innovation and design to help your brand stand out online.
</p>
</div>
      {/* Quick Links */}
      <div className="col-md-4 text-center">
        <h5 className="text-danger mb-3">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#about" className="footer-link">About Us</a></li>
          <li><a href="#services" className="footer-link">Services</a></li>
          <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
          <li><a href="#contact" className="footer-link">Contact</a></li>
        </ul>
      </div>

      {/* Contact + Google Map */}
      <div className="col-md-4 text-center text-md-start">
        <h5 className="text-danger mb-3">Contact Us</h5>
        <p className="mb-1"><i className="bi bi-geo-alt-fill text-danger"></i>  Rewari, Haryana, India</p>
        <p className="mb-1"><i className="bi bi-telephone-fill text-danger"></i>  +91 85709 36967</p>
        <p className="mb-3"><i className="bi bi-envelope-fill text-danger"></i>  npgsoftwaresolutions@gmail.com</p>

        <div className="map-container rounded-4 overflow-hidden shadow-sm">
          <iframe
            title="NPG Software Solutions Location"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d878.9768979594434!2d76.60715452355211!3d28.210120014052475!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1759947985325!5m2!1sen!2sin"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    {/* Bottom Line */}
    <hr className="border-danger mt-5" />
    <div className="text-center small">
      © {new Date().getFullYear()} <span className="text-danger">NPG Software Solutions</span>. All rights reserved.
    </div>
  </div>
</footer>
);
};

export default Footer;