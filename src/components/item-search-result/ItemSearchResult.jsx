import React from 'react';
import { formatCOP } from '../../utils/utils';
import './ItemSearchResult.scss';

export const ItemSearchResult = ({ product }) => {
  if (!product) return null;

  return (
    <div className="item-search-result">
      <div className="item-search-result__container">
        <div className="item-search-result__image-container">
          <img className="item-search-result__image" src={product.image} alt={product.title} />
        </div>
        <div className="item-search-result__info">
          <div className="item-search-result__title-container">
            <h3 className="item-search-result__title">{product.title}</h3>
            <span className="item-search-result__store">Por Mercado Libre</span>
          </div>
          <span className="item-search-result__price">{formatCOP(product.price)}</span>
          {product.shipping && <span className="item-search-result__shipping">Envío gratis</span>}
        </div>
      </div>
    </div>
  );
};
