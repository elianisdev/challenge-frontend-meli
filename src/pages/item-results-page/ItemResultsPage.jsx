import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ItemSearchResult } from '../../components/item-search-result/ItemSearchResult';
import { Pagination } from '../../components/pagination/Pagination';
import { Loading } from '../../components/loading/Loading';
import { useFetchItems } from '../../hooks/useFetchItems';
import { ItemsNotFound } from '../../components/items-not-found/ItemsNotFound';
import './ItemResultsPage.scss';

export const ItemResultsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('search');
  const [page, setPage] = useState(1);
  const { items, loading, error, totalPages } = useFetchItems(keyword, page);

  if (!keyword) return <ItemsNotFound />;
  if (loading) return <Loading />;
  if (error) return <ItemsNotFound />;
  if (items.length === 0) return <ItemsNotFound />;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <section className="results">
      {items.map((product) => (
        <Link key={product.id} to={`/items/${product.id}`}>
          <ItemSearchResult product={product} />
        </Link>
      ))}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </section>
  );
};
