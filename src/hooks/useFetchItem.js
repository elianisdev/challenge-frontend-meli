import { useEffect, useState } from 'react';
import { getItemDetail } from '../services/itemService';

export const useFetchItem = (itemId) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!itemId) return;
    setLoading(true);
    setError(null);
    setItem(null);

    const fetchData = async () => {
      try {
        const data = await getItemDetail(itemId);
        setItem(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [itemId]);

  return { item, loading, error };
}; 