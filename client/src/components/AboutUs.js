import React from "react";
import jQuery from "jquery";
//import $ from "./assets/js/vendor/jquery-1.12.0.min";
window.jQuery = jQuery;

const AboutUs = () => {
  return (
    <body>
      <header className="">
        <div className="header-top-area blue-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 site-branding col-xs-12">
                <div className="header-logo">
                  <a href="index.html">
                    <img src="assets/img/logo/1.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-9 hidden-xs">
                <div className="header-left">
                  <div className="header-text">
                    <div className="header-icon">
                      <i className="fa fa-phone" />
                      <i className="paint-roller" />
                    </div>
                    <div className="header-info">
                      <span className="phone">+00-1202-235</span>
                      <span className="gmail">hmend@gmail.com</span>
                    </div>
                  </div>
                  <div className="header-text">
                    <div class="header-icon">
                      <i class="fa fa-home" />
                    </div>
                    <div class="header-info">
                      <span class="phone">2020 Willshire Glen,</span>
                      <span class="gmail">Alpharetta,USA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-3 hidden-sm col-xs-12">
                <div class="header-left-icon">
                  <a href="#">
                    <i class="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i class="fa fa-vimeo" />
                  </a>
                  <a href="#">
                    <i class="fa fa-tumblr" />
                  </a>
                  <a href="#">
                    <i class="fa fa-pinterest-p" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="header-sticky"
          name="header-sticky"
          className="main-menu-area gray-bg"
        >
          <div className="container">
            <div className="row">
              <div className=" col-lg-10 col-md-8  col-xs-7">
                <div className="main-menu">
                  <nav>
                    <ul>
                      <li className="active">
                        <a href="index.html">home</a>
                      </li>
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="service.html">service</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="service-details.html">service-details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="project.html">projects</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="project-details.html">project-details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog.html">blog</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="blog-details.html">blog-details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className=" col-lg-2 col-md-4 col-xs-12">
                <div className="make-appointment">
                  <img src="assets/img/logo/2.png" alt="" />
                  <a href="#">make appointment</a>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="mobile-menu" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </body>
  );
};

export default AboutUs;
