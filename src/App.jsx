import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import OurDirectorPage from "./pages/OurDirectorPage.jsx";
import Layout from "./componants/Layout.jsx";
import CompanyProfilePage from "./pages/CompanyProfilePage.jsx";
import CareersPage from "./pages/CareerPage.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";
import ProtectedAdmin from "./admin/components/ProtectedAdmin.jsx";
import ServiceDetailPage from "./pages/ServiceDetailPage.jsx";
import ContactPage from "./pages/ContactUsPage.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./pages/Terms&Condition.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import OurProjectsPage from "./pages/OurProjects.jsx";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import PEBMultiStoryPage from "./pages/service_pages/PEBMultiStoryPage.jsx";
import PEBWarehousingPage from "./pages/service_pages/PEBWarehousingPage.jsx";
import GISheetPage from "./pages/service_pages/GISheetPage.jsx";
import IndustrialShedPage from "./pages/service_pages/IndustrialShedPage.jsx";

function App() {
  const location = useLocation();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918319950259", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+918319950259");
  };

  // Check if we're on an admin page
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="directors" element={<OurDirectorPage />} />
          <Route path="profile" element={<CompanyProfilePage />} />
          <Route path="career" element={<CareersPage />} />
          {/* <Route path="/service/:title" element={<ServiceDetailPage />} /> */}
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/our-project" element={<OurProjectsPage />} />


          {/* // services */}
          <Route path="/service/peb-multi-story-building" element={<PEBMultiStoryPage />} />
          <Route path="/service/peb-warehousing" element={<PEBWarehousingPage />} />
          <Route path="/service/gi-sheet-manufacturing" element={<GISheetPage />} />
          <Route path="/service/industrial-shed" element={<IndustrialShedPage />} />
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

      {/* Floating Buttons - only show if not in /admin */}
      {!isAdminRoute && (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          {/* WhatsApp */}
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
          >
            <FaWhatsapp className="h-7 w-7" />
          </button>

          {/* Call */}
          <button
            onClick={handleCallClick}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110"
          >
            <Phone className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}

export default App;
