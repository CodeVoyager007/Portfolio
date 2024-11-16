import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="container">
      <div className="container">
        <h3>Contact Me</h3>
        <div className="social-links">
          <a
            href="mailto:ayeshamughal2162@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gmail"
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            href="https://www.instagram.com/ayesha_techadventures/"
            target="_blank"
            rel="noopener noreferrer"
            className="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.github.com/CodeVoyager007"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="copyright">
          2024 © Portfolio <strong><span>Ayesha Mughal</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
