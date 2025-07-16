import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout.jsx';
import { ItemSearchResult } from '../components/item-search-result/ItemSearchResult.jsx';
import { Home } from '../pages/Home.jsx';
import { NotFound } from '../pages/NotFound.jsx';
import { ItemDetail } from '../components/item-detail/ItemDetail.jsx';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="items" element={<ItemSearchResult />} />
        <Route path="items/:itemId" element={<ItemDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
