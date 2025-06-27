import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import OurDirectorPage from './pages/OurDirectorPage.jsx';
import Layout from './componants/Layout.jsx';
import CompanyProfilePage from './pages/CompanyProfilePage.jsx';
import CareersPage from './pages/CareerPage.jsx';
import AdminRoutes from './routes/AdminRoutes.jsx';
import ProtectedAdmin from './admin/components/ProtectedAdmin.jsx';
import ServiceDetailPage from './pages/ServiceDetailPage.jsx';
import ContactPage from './pages/ContactUsPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="directors" element={<OurDirectorPage />} />
        <Route path="profile" element={<CompanyProfilePage />} />
        <Route path="career" element={<CareersPage />} />
<Route path="/service/:title" element={<ServiceDetailPage />} />
                <Route path="/contact-us" element={<ContactPage />} />

      </Route>

      <Route
        path="/admin/*"
        element={
          <ProtectedAdmin>
            <AdminRoutes />
          </ProtectedAdmin>
        }
      />
    </Routes>
  );
}

export default App;
