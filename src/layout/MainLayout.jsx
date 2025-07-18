import { Outlet } from 'react-router-dom';
import { Footer } from '../components/footer/Footer.jsx';
import { Header } from '../components/header/Header.jsx';
import './MainLayout.scss';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
