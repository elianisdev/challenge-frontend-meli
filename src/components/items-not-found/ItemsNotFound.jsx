import React from 'react';
import './ItemsNotFound.scss';

export const ItemsNotFound = () => {
  return (
    <div className="items-not-found">
      <div className="items-not-found__container">
        <div className="items-not-found__icon">
          <img
            src="https://http2.mlstatic.com/frontend-assets/search-nordic/not-found.svg"
            alt="No se encontraron resultados"
            width="64"
            height="64"
          />
        </div>
        <div className="items-not-found__content">
          <h3 className="items-not-found__title">
            No hay publicaciones que coincidan con tu búsqueda.
          </h3>
          <ul className="items-not-found__suggestions">
            <li>
              <strong>Revisá la ortografía</strong> de la palabra.
            </li>
            <li>
              Utilizá <strong>palabras más genéricas</strong> o menos palabras.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
