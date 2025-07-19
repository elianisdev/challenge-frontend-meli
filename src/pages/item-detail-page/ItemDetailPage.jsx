import React from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../../components/item-detail/ItemDetail';
import { Loading } from '../../components/loading/Loading';
import { useFetchItem } from '../../hooks/useFetchItem';
import { NotFoundMessage } from '../../components/not-found-message/NotFoundMessage';
import { ItemDetailCategory } from '../../components/item-detail-category/ItemDetailCategory';
import './ItemDetailPage.scss';

export const ItemDetailPage = () => {
  const { itemId } = useParams();
  const { item, loading, error } = useFetchItem(itemId);

  if (loading) return <Loading />;

  if (error) return <NotFoundMessage />;

  return (
    <section className="item-detail-page">
      <ItemDetailCategory category={item?.category} />
      <ItemDetail product={item} />
    </section>
  );
};
