import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-contact">
            <h2>CONTATO</h2>
            <ul>
              <li>
                909 Third Avenue
                <br />
                9th Floor
                <br />
                New York, NY 10022
                <br />
                +1 (212) 242 0200
              </li>
              <li>
                SC 401, 5500
                <br />
                Lagoa B 309, 311, 313
                <br />
                Florianópolis, Brazil
                <br />
                +55 (48) 4042 2212
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-center">
          <div className="footer-navigation">
            <h2>NAVEGAÇÃO</h2>
            <ul>
              <li>
                <a to="/">Home</a>
              </li>
              <li>
                <a to="/about">About</a>
              </li>
              <li>
                <a to="/services">Services</a>
              </li>
              <li>
                <a to="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-social">
            <h2>REDE SOCIAL</h2>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCn3kryqtfC35pmNV2KHhvKw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/theBKBrothers"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/thebrooklynbrothers"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/the-brooklyn-brothers"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright &copy; 2022 The Brooklyn Brothers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
