import { Routes } from "common/enums";
import { Link } from "react-router-dom";
import { fallDown as Menu } from 'react-burger-menu'

import "./styles.css";
import {useState} from "react";

const Header = () => {
  const [closed, setClosed] = useState(true);
  return (
    <header className="header right">
      <div className="header__container">
        <div className="logo_container">
          <h1
            style={{ fontSize: "40px", color: "#0088BB", fontWeight: 900 }}
            className="header__logo"
          >
            <Link to={Routes.DEFAULT}>AcmeBank</Link>
          </h1>
        </div>
        <div>

          <nav className="top-menu-nav">
            <ul className="top-menu">
              <li className="menu-item">
                <Link to={Routes.DEFAULT}>About Us</Link>
              </li>
              <li className="menu-item">
                <Link to={Routes.DEFAULT}>FAQs</Link>
              </li>
              <li className="menu-item">
                <Link to={Routes.ACCOUNT}>New Account</Link>
              </li>
              <li className="menu-item">
                <Link className="login" to={Routes.DEFAULT}>
                  Login
                </Link>
              </li>
              <li className="menu-item">
                <Link className="signup" to={Routes.SIGNUP}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>

          <Menu className="et_mobile_menu" outerContainerId={ "main-container" } isOpen={!closed} onOpen={() => setClosed(false)}>
            <Link to={Routes.DEFAULT} onClick={() => setClosed(true)}>About Us</Link>
            <Link to={Routes.DEFAULT} onClick={() => setClosed(true)}>FAQs</Link>
            <Link to={Routes.ACCOUNT} onClick={() => setClosed(true)}>New Account</Link>
            <Link to={Routes.DEFAULT} onClick={() => setClosed(true)}>Login</Link>
            <Link to={Routes.SIGNUP} onClick={() => setClosed(true)}>Sign Up</Link>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
