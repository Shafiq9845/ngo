import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Css/open-iconic-bootstrap.min.css';
import '../../Css/animate.css';
import '../../Css/owl.carousel.min.css';
import '../../Css/owl.theme.default.min.css';
import '../../Css/magnific-popup.css';
import '../../Css/aos.css';
import '../../Css/ionicons.min.css';
import '../../Css/bootstrap-datepicker.css';
import '../../Css/jquery.timepicker.css';
import '../../Css/flaticon.css';
import '../../Css/icomoon.css';
import '../../Css/style.css';

const Footer = () => {
  return (
    <>
      <footer className="ftco-footer ftco-section img">
        <div className="overlay"></div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">About Us</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Recent Blog</h2>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: 'url(../Images/image_1.jpg)' }} // Corrected style
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar"></span> July 12, 2018
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person"></span> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat"></span> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: 'url(../Images/image_1.jpg)' }} // Corrected style
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span className="icon-calendar"></span> July 12, 2018
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person"></span> Admin
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-chat"></span> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Site Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="py-2 d-block">Home</Link>
                  </li>
                  <li>
                    <Link to="/About" className="py-2 d-block">About</Link>
                  </li>
                  <li>
                    <Link to="/donate" className="py-2 d-block">Donate</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="py-2 d-block">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-phone"></span>
                        <span className="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-envelope"></span>
                        <span className="text">info@yourdomain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
