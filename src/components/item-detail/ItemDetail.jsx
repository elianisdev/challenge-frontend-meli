import React, { useState } from 'react';
import { Loading } from '../loading/Loading';
import { formatCOP } from '../../utils/utils';
import './ItemDetail.scss';

export const ItemDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="item-detail">
      <div className="item-detail__container">
        <div className="item-detail__main">
          <div className="item-detail__gallery">
            <div className="item-detail__thumbnails">
              {product?.images?.length > 1 ? (
                product.images.map((picture, index) => (
                  <img
                    key={index}
                    className={`item-detail__thumbnail ${selectedImage === index ? 'item-detail__thumbnail--active' : ''}`}
                    src={picture}
                    alt={`${product.title} - Vista ${index + 1}`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))
              ) : (
                <img className="item-detail__thumbnail" src={product.image} alt={product.title} />
              )}
            </div>
            <div className="item-detail__image-container">
              <img
                className="item-detail__image"
                src={product.images ? product.images[selectedImage] : product.image}
                alt={product.title}
              />
            </div>
          </div>

          <div className="item-detail__info">
            <p className="item-detail__condition">
              {product.condition || 'Nuevo'} | +{product.sold_quantity || 0} vendidos
            </p>
            <h1 className="item-detail__title">{product.title}</h1>
            <p className="item-detail__seller">Por {product.seller || 'Mercado Libre'}</p>

            <p className="item-detail__price">{formatCOP(Math.round(product.price))}</p>
            <p className="item-detail__installment">
              Mismo precio en 12 cuotas de {formatCOP(Math.round(product.price / 12))}
            </p>

            {product.shipping && <p className="item-detail__shipping">Envío gratis</p>}

            {product.color && (
              <p className="item-detail__color">
                Color: <strong>{product.color}</strong>
              </p>
            )}
          </div>
        </div>

        <div className="item-detail__description">
          <h2 className="item-detail__description-title">Descripción</h2>
          <p className="item-detail__description-text">{product.description}</p>
        </div>
      </div>
    </div>
  );
};
