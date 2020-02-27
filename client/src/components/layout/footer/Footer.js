import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import './Footer.css'

export default function Footer() {

  return (
    <footer>
      <div className="social-container">
        <p className="social-title">Coded by : Buff Coder LLC {'\u00A9'} 2019 </p>
        <a
          href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="1x" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="1x" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </a>
        <a
          href="https://www.instagram.com/art_ent1/"
          target="_blank" rel="noopener noreferrer" className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="1x" />
        </a>
      </div>


      {/* <ul>
          <li>Coded by : Buff Coder LLC {'\u00A9'} 2019 </li>

          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>

        </ul> */}
    </footer>
  )
}

