import React from "react";

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
              <li>
                <a href="https://www.thebrooklynbrothers.com/contact.html">
                  Email us
                </a>
                <br />
                <a href="https://www.thebrooklynbrothers.com/contact.html">
                  Google Maps
                </a>
              </li>
              <li>
                <a href="https://www.thebrooklynbrothers.com/privacy-and-cookies.html">
                  Privacidade e Termos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-center">
          <div className="footer-navigation" id={`${theme}`}>
            <h2>
              <span style={{ color: "#d7d923" }}>/</span>
              NAVEGAÇÃO
            </h2>
            <ul>
              <li>
                <a href="https://www.thebrooklynbrothers.com/info.html">
                  Informações
                </a>
              </li>
              <li>
                <a href="https://www.thebrooklynbrothers.com/news.html">
                  Notícias
                </a>
              </li>
              <li>
                <a href="https://www.thebrooklynbrothers.com/views.html">
                  Views
                </a>
              </li>
              <li>
                <a href="https://www.thebrooklynbrothers.com/work.html">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="https://www.thebrooklynbrothers.com/contact.html">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-social" id={`${theme}`}>
            <h2>
              <span style={{ color: "#e53262" }}>/</span>
              REDE SOCIAL
            </h2>
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
        <p>Copyright &copy; 2023 The Brooklyn Brothers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
