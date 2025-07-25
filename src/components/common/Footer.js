import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../utils/constant";
import scrollTop from "../scrollTop/ScrollTop"

function Footer() {
   const scrollToTop = () => {
    console.log("getting top")
    window.scrollTo(0, 0);
  };
   return (
    <footer>
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <a
              data-bs-toggle="collapse"
              data-bs-target="#collapse_ft_1"
              aria-expanded="false"
              aria-controls="collapse_ft_1"
              className="collapse_bt_mobile"
            >
              <h3>Quick Links</h3>
              <div className="circle-plus closed">
                <div className="horizontal" />
                <div className="vertical" />
              </div>
            </a>
            <div className="collapse show" id="collapse_ft_1">
              <ul className="links">
                <li><Link to={AppRoutes.AboutPage}>About us</Link></li>
                <li><Link to={AppRoutes.FAQPage}>Faq</Link></li>
                <li><Link to={AppRoutes.HelpCenter}>Help</Link></li>
                <li><Link to={AppRoutes.ContactPage}>Contacts</Link></li>
              </ul>
            </div>
          </div>

          {/* Categories */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <a
              data-bs-toggle="collapse"
              data-bs-target="#collapse_ft_2"
              aria-expanded="false"
              aria-controls="collapse_ft_2"
              className="collapse_bt_mobile"
            >
              <h3>Categories</h3>
              <div className="circle-plus closed">
                <div className="horizontal" />
                <div className="vertical" />
              </div>
            </a>
            <div className="collapse show" id="collapse_ft_2">
              <ul className="links">
                <li><a href="#0">Shops</a></li>
                <li><a href="#0">Hotels</a></li>
                <li><a href="#0">Restaurants</a></li>
                <li><a href="#0">Bars</a></li>
                <li><a href="#0">Events</a></li>
                <li><a href="#0">View all</a></li>
              </ul>
            </div>
          </div>

          {/* Contacts */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <a
              data-bs-toggle="collapse"
              data-bs-target="#collapse_ft_3"
              aria-expanded="false"
              aria-controls="collapse_ft_3"
              className="collapse_bt_mobile"
            >
              <h3>Contacts</h3>
              <div className="circle-plus closed">
                <div className="horizontal" />
                <div className="vertical" />
              </div>
            </a>
            <div className="collapse show" id="collapse_ft_3">
              <ul className="contacts">
                <li><i className="ti-home"></i>97845 Baker st. 567<br />Los Angeles - US</li>
                <li><i className="ti-headphone-alt"></i>+61 23 8093 3400</li>
                <li><i className="ti-email"></i><a href="#0">info@domain.com</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <a
              data-bs-toggle="collapse"
              data-bs-target="#collapse_ft_4"
              aria-expanded="false"
              aria-controls="collapse_ft_4"
              className="collapse_bt_mobile"
            >
              <div className="circle-plus closed">
                <div className="horizontal" />
                <div className="vertical" />
              </div>
              <h3>Keep in touch</h3>
            </a>
            <div className="collapse show" id="collapse_ft_4">
              <div id="newsletter">
                <div id="message-newsletter" />
                <form
                  method="post"
                  action="https://www.ansonika.com/vanno/assets/newsletter.php"
                  name="newsletter_form"
                  id="newsletter_form"
                >
                  <div className="form-group">
                    <input
                      type="email"
                      name="email_newsletter"
                      id="email_newsletter"
                      className="form-control"
                      placeholder="Your email"
                    />
                    <input type="submit" value="Submit" id="submit-newsletter" />
                  </div>
                </form>
              </div>
              <div className="follow_us">
                <h5>Follow Us</h5>
                <ul>
                  <li><a href="#0"><i className="bi bi-facebook"></i></a></li>
                  <li><a href="#0"><i className="bi bi-twitter-x"></i></a></li>
                  <li><a href="#0"><i className="bi bi-instagram"></i></a></li>
                  <li><a href="#0"><i className="bi bi-tiktok"></i></a></li>
                  <li><a href="#0"><i className="bi bi-whatsapp"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-lg-6">
            
          </div>
          <div className="col-lg-6">
            <ul id="additional_links">
              <li><a href="#0">Terms and conditions</a></li>
              <li><a href="#0">Privacy</a></li>
              <li><span>© 2023 Vanno</span></li>
            </ul>
          </div>
        </div>
      </div>
     <div id="toTop" onClick={scrollToTop} style={{ cursor: 'pointer'}} aria-label="Scroll to top"></div>
    </footer>
  );
}
 

export default Footer;
