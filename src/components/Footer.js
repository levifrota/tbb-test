import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = ({ theme }) => {
  return (
    <footer className="footer" id={`${theme}`}>
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-contact" id={`${theme}`}>
            <h2>
              <span style={{ color: "#19b2c0" }}>/</span>
              CONTATO
            </h2>
            <br />
            <div>
              <div>
                909 Third Avenue
                <br />
                9th Floor
                <br />
                New York, NY 10022
                <br />
                +1 (212) 242 0200
              </div>
              <br />
              <div>
                SC 401, 5500
                <br />
                Lagoa B 309, 311, 313
                <br />
                Florianópolis, Brazil
                <br />
                +55 (48) 4042 2212
              </div>
              <br />
              <div>
                <a href="https://www.thebrooklynbrothers.com/contact.html">
                  Email us
                </a>
                <br />
                <a href="https://www.thebrooklynbrothers.com/contact.html">
                  Google Maps
                </a>
              </div>
              <br />
              <div>
                <a href="https://www.thebrooklynbrothers.com/privacy-and-cookies.html">
                  Privacidade e Termos
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-center">
          <div className="footer-navigation" id={`${theme}`}>
            <h2>
              <span style={{ color: "#d7d923" }}>/</span>
              NAVEGAÇÃO
            </h2>
            <br />
            <div>
              <div>
                <a href="https://www.thebrooklynbrothers.com/info.html">
                  Informações
                </a>
              </div>
              <br />
              <div>
                <a href="https://www.thebrooklynbrothers.com/news.html">
                  Notícias
                </a>
              </div>
              <br />
              <div>
                <a href="https://www.thebrooklynbrothers.com/views.html">
                  Views
                </a>
              </div>
              <br />
              <div>
                <a href="https://www.thebrooklynbrothers.com/work.html">
                  Trabalhe Conosco
                </a>
              </div>
              <br />
              <div>
                <a href="https://www.thebrooklynbrothers.com/contact.html">
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-social" id={`${theme}`}>
            <h2>
              <span style={{ color: "#e53262" }}>/</span>
              REDES SOCIAIS
            </h2>
            <br />
            <div className="social">
              <div>
                <a
                  href="https://www.youtube.com/channel/UCn3kryqtfC35pmNV2KHhvKw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} className="social-img" />
                </a>
              </div>
              <br />
              <div>
                <a
                  href="https://www.twitter.com/theBKBrothers"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="social-img" />
                </a>
              </div>
              <br />
              <div>
                <a
                  href="https://www.instagram.com/thebrooklynbrothers"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="social-img" />
                </a>
              </div>
              <br />
              <div>
                <a
                  href="https://www.linkedin.com/company/the-brooklyn-brothers"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="social-img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright &copy; 2023 The Brooklyn Brothers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
