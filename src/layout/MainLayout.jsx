import { Outlet } from 'react-router-dom';
import { Footer } from '../components/footer/Footer.jsx';
import { Header } from '../components/header/Header.jsx';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
