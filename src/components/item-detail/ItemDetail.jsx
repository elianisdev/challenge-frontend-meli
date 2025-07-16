import React from 'react';
import { useParams } from 'react-router-dom';

export const ItemDetail = () => {
  const { itemId } = useParams();

  return <div>Detalle del producto con el id {itemId}</div>;
};
