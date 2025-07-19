import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout.jsx';
import { Home } from '../pages/Home.jsx';
import { ItemDetailPage } from '../pages/item-detail-page/ItemDetailPage.jsx';
import { ItemResultsPage } from '../pages/item-results-page/ItemResultsPage.jsx';
import { NotFoundPage } from '../pages/not-found-page/NotFoundPage.jsx';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="items" element={<ItemResultsPage />} />
        <Route path="items/:itemId" element={<ItemDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
