import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import Footer from './Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <AppBar />
      <main>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
