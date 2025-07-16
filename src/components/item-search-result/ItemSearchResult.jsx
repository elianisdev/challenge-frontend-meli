import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const ItemSearchResult = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('search');

  return <div>Productos encontrados para la palabra: {keyword}</div>;
};
