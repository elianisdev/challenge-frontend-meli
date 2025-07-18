import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout.jsx';
import { Home } from '../pages/Home.jsx';
import { NotFound } from '../pages/NotFound.jsx';
import { ItemDetailPage } from '../pages/item-detail/ItemDetailPage.jsx';
import { ItemResultsPage } from '../pages/ItemResults/ItemResultsPage.jsx';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="items" element={<ItemResultsPage />} />
        <Route path="items/:itemId" element={<ItemDetailPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
