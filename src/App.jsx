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
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsAndConditions from './pages/Terms&Condition.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import OurProjectsPage from './pages/OurProjects.jsx';

function App() {
  return (
    <>
      <ScrollToTop /> {/* This ensures smooth scroll to top on route change */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="directors" element={<OurDirectorPage />} />
          <Route path="profile" element={<CompanyProfilePage />} />
          <Route path="career" element={<CareersPage />} />
          <Route path="/service/:title" element={<ServiceDetailPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/our-project" element={<OurProjectsPage />} />
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
    </>
  );
}

export default App;
