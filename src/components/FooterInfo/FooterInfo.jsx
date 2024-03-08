import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import "../FooterInfo/FooterInfo.css";

const FooterInfo = () => {
  return (
    <div className="footerInfo">
      <div className="container p-0">
        <div className="footerFlex">
          <ul>
            <li>
              <p>Follow Us:-</p>
            </li>
            <li>
              <a href="https://www.facebook.com/punjabsinddairy" target="_blank">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/punjabsindpremiumdairy?igshid=MDE2OWE1N2Q=" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </ul>
          <ul className="footerPages">
            <li>
              <a href="/about_us">
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a href="/issue">
                <span>Contact Us</span>
              </a>
            </li>
            <li>
              <a href="https://punjabsind.in/terms">
                <span>Terms &amp; Conditions</span>
              </a>
            </li>
            <li>
              <a href="https://punjabsind.in/privacy">
                <span>Privacy Policy</span>
              </a>
            </li>
          </ul>
          <h6>© 2022 Punjab Sindh. All Rights Reserved</h6>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
