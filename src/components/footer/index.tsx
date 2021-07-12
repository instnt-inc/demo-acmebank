import { Link } from "react-router-dom";
import { Icons } from "common/enums";
import { getIcon } from "common/helpers";

import "./styles.css";

const ICON_STYLES = {
  height: "40",
  width: "40",
};

const Footer = () => (
  <footer className="footer-wrapper">
    <div className="footer-menu featured-container">
      <Link to="/">Cardholder Agreement</Link>
      <Link to="/">Terms and Conditions</Link>
      <Link to="/">Contact Us</Link>
    </div>
    <div className="footer-follow">
      <span>Follow us on social media</span>
      <div className="footer-follow__socials">
        <Link to="/">{getIcon(Icons.YOUTUBE, ICON_STYLES)}</Link>
        <Link to="/">{getIcon(Icons.FACEBOOK, ICON_STYLES)}</Link>
        <Link to="/">{getIcon(Icons.TWITTER, ICON_STYLES)}</Link>
        <Link to="/">{getIcon(Icons.INSTAGRAM, ICON_STYLES)}</Link>
      </div>
    </div>
    <div>
      <div className="company-rights">
        The AcmeBank card is issued by Acme Bank, member FDIC, pursuant to a
        license from MasterCard International© 2019. AcmeBank Inc. All Rights
        Reserved
      </div>
    </div>
  </footer>
);
export default Footer;
