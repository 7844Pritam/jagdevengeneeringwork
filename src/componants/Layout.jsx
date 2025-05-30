import React from 'react';

import { Outlet } from 'react-router-dom';
import NewNavbar from './NewNavbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <NewNavbar />
      <main>
        <Outlet /> {/* This will render the matched route's component */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
