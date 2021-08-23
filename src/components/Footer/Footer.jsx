import React from "react";
import "./Footer.scss";
import brass from "../../images/brass.png";
import slack from "../../images/slack.png";
import android from "../../images/android.png";
import apple from "../../images/apple.png";
import { Image } from "react-bootstrap";
import Platform from "./Platform";

const Footer = () => {
  return (
    <footer>
      <div className='footer-top'>
        <h4>Open a free account in 10 minutes.</h4>
        <h1>Get started with a modern current account</h1>
        <a className='footer-link' href='/'>
          <button>Open an account</button>
        </a>
      </div>
      <div className='footer-bottom'>
        <div className='left-footer'>
          <Image className='brass' src={brass} />
          <h3>Big starts small.</h3>
          <p>Available on web, also available on</p>
          <div className="platforms">
            <Platform image={slack} text="Slack" />
            <Platform image={android} text="Android" />
            <Platform image={apple} text="iOS" />
          </div>
        </div>
        <nav className="right-footer">
          <ul>
            <li><a href="/">Log in</a></li>
            <li><a href="/">Open an account</a></li>
            <li><a href="/">Pricing</a></li>
          </ul>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact us</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">Instagram</a></li>
          </ul>
          <ul>
            <li><a href="/">Legal</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
