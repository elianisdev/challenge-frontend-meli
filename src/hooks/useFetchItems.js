import { useEffect, useState } from 'react';
import { searchItems } from '../services/itemService';

export const useFetchItems = (keyword, page = 1, limit = 5) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!keyword) return;
    setLoading(true);
    setError(null);
    setItems([]);

    const fetchData = async () => {
      try {
        const offset = (page - 1) * limit;
        const data = await searchItems(keyword, offset, limit);
        setItems(data.items);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [keyword, page, limit]);

  return { items, loading, error, totalPages };
};