import React from "react";
const AddContact=()=>
{
    return(
        <>
        <footer className="footer-wrapper footer-layout1" data-bg-src="assets/img/bg/footer-bg.png">
      <div className="shape-mockup footer-shape1 jump" data-left="60px" data-top="70px">
        <img src="assets/img/normal/footer-bg-shape1.png" alt="img" />
      </div>
      <div className="shape-mockup footer-shape2 jump-reverse" data-right="80px" data-bottom="120px">
        <img src="assets/img/normal/footer-bg-shape2.png" alt="img" />
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="footer-contact-wrap">
            <div className="footer-contact">
              <div className="footer-contact_icon icon-btn">
                <i className="fal fa-phone"></i>
              </div>
              <div className="media-body">
                <p className="footer-contact_text">Call us any time:</p>
                <a href="tel:+911234567890" className="footer-contact_link">+91 7358039311</a>
              </div>
            </div>
            <div className="divider"></div>
            <div className="footer-contact">
              <div className="footer-contact_icon icon-btn">
                <i className="fal fa-envelope"></i>
              </div>
              <div className="media-body">
                <p className="footer-contact_text">Email us 24/7 hours:</p>
                <a href="mailto:info@edura.com" className="footer-contact_link">cyberbots.crti@gmail.com</a>
              </div>
            </div>
            <div className="divider"></div>
            <div className="footer-contact">
              <div className="footer-contact_icon icon-btn">
                <i className="fal fa-location-dot"></i>
              </div>
              <div className="media-body">
                <p className="footer-contact_text">Our location:</p>
                <a href="https://www.google.com/maps" className="footer-contact_link">62, Ravi Colony 1st Street, St. Thomas Mount , Chennai - 600016</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-wrap" data-bg-src="assets/img/bg/jiji.png">
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xxl-3 col-xl-3">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo">
                      <a href="index.html"><img src="assets/img/p3ujhdiguyfwt.png" alt="cyberbots" /></a>
                    </div>
                    <p className="about-text">Join Cyberbots Today and learn from the best in the business. Elevate your skills, shape your career, and become a trailblazer in the world of technology!</p>
                    <div className="th-social">
                      <h6 className="title text-white">FOLLOW US ON:</h6>
                      <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                      <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                      <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                      <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                      <a href="https://www.skype.com/"><i className="fab fa-skype"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick link</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li><a href="course.html">Web Development</a></li>
                      <li><a href="course.html">Ai</a></li>
                      <li><a href="course.html">Data Science</a></li>
                      <li><a href="course.html">3D design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Resources</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li><a href="contact.html">Community</a></li>
                      <li><a href="contact.html">Support</a></li>
                      <li><a href="contact.html">Video Guides</a></li>
                      <li><a href="contact.html">Documentation</a></li>
                      <li><a href="contact.html">Security</a></li>
                      <li><a href="contact.html">Template</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-3 col-xl-3">
                <div className="widget newsletter-widget footer-widget">
                  <h3 className="widget_title">Get in touch!</h3>
                  <p className="footer-text">Subscribe our newsletter to get our latest Update & news</p>
                  <form className="newsletter-form form-group">
                    <input className="form-control" type="email" placeholder="Email Email" required />
                    <i className="far fa-envelope"></i>
                    <button type="submit" className="th-btn style3">Subscribe Now <i className="far fa-arrow-right ms-1"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright-wrap">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6">
                <p className="copyright-text">Copyright © 2024 <a href="index.html">CYBERBOTS</a> All Rights Reserved.</p>
              </div>
              <div className="col-md-6 text-end d-none d-md-block">
                <div className="footer-links">
                  <ul>
                    <li><a href="about.html">Privacy & Policy</a></li>
                    <li><a href="about.html">Terms & Condition</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

        </>
    )
}
export default AddContact;