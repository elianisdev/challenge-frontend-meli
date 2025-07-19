import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundMessage.scss';

export const NotFoundMessage = () => {
  return (
    <div className="not-found-message">
      <div className="not-found-message__container">
        <div className="not-found-message__icon">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              fill="#999"
            />
          </svg>
        </div>
        <div className="not-found-message__content">
          <h1 className="not-found-message__title">404</h1>
          <h2 className="not-found-message__subtitle">Página no encontrada</h2>
          <p className="not-found-message__description">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <div className="not-found-message__actions">
            <Link to="/" className="not-found-message__button not-found-message__button--primary">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
