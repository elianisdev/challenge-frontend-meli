import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <span className="footer__text">
            <a
              href="https://github.com/elianisdev/challenge-frontend-meli"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Challenge Frontend Meli
            </a>
            , desarrollado por{' '}
            <a
              href="https://github.com/elianisdev"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Eliana Suancha Guzmán
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
