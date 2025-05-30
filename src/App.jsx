import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import OurDirectorPage from './pages/OurDirectorPage.jsx';
import Layout from './componants/Layout.jsx';
import CompanyProfile from './pages/company_profile/CompanyProfile.jsx';
import CompanyProfilePage from './pages/CompanyProfilePage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="directors" element={<OurDirectorPage />} />
        <Route path="profile" element={<CompanyProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
