import React, { useState } from 'react';
import './ItemDetail.scss';

export const ItemDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 'MLA117020690',
    title: 'Apple iPhone 14 (128 GB) - Blanco estelar',
    seller: 'OCEANGREEN ARGENTINA',
    price: 1362836,
    installment: '9 cuotas de $ 151.426',
    free_shipping: true,
    sold_quantity: 100,
    condition: 'Nuevo',
    color: 'Blanco estelar',
    pictures: [
      'https://exitocol.vtexassets.com/arquivos/ids/27278009/iphone-14-128gb-blanco-estelar.jpg?v=638803273279170000',
      'https://exitocol.vtexassets.com/arquivos/ids/27278010/iphone-14-128gb-blanco-estelar-2.jpg?v=638803273279170000',
      'https://exitocol.vtexassets.com/arquivos/ids/27278011/iphone-14-128gb-blanco-estelar-3.jpg?v=638803273279170000',
      'https://exitocol.vtexassets.com/arquivos/ids/27278012/iphone-14-128gb-blanco-estelar-4.jpg?v=638803273279170000',
    ],
    description: `El iPhone SE es el iPhone de 4,7 pulgadas más potente hasta ahora (1). Tiene el chip A13 Bionic, que ofrece un rendimiento increíble en apps, juegos y fotos...`,
  };

  return (
    <section className="item-detail">
      <div className="item-detail__container">
        <div className="item-detail__gallery">
          <div className="item-detail__thumbnails">
            {product.pictures.map((picture, index) => (
              <img
                key={index}
                className={`item-detail__thumbnail ${selectedImage === index ? 'item-detail__thumbnail--active' : ''}`}
                src={picture}
                alt={`${product.title} - Vista ${index + 1}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
          <img
            className="item-detail__image"
            src={product.pictures[selectedImage]}
            alt={product.title}
          />
        </div>

        <div className="item-detail__info">
          <p className="item-detail__condition">
            {product.condition} | +{product.sold_quantity} vendidos
          </p>
          <h1 className="item-detail__title">{product.title}</h1>
          <p className="item-detail__seller">Por {product.seller}</p>

          <p className="item-detail__price">${product.price.toLocaleString('es-AR')}</p>
          <p className="item-detail__installment">Mismo precio en {product.installment}</p>

          {product.free_shipping && <p className="item-detail__shipping">Envío gratis</p>}

          <p className="item-detail__color">
            Color: <strong>{product.color}</strong>
          </p>
        </div>
      </div>

      <div className="item-detail__description">
        <h2>Descripción</h2>
        <p>{product.description}</p>
      </div>
    </section>
  );
};
