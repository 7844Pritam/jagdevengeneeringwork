import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../admin/pages/AdminHome";
import AdminBrands from "../admin/pages/AdminBrand";
import AdminBlog from "../admin/pages/AdminBlog";
import AdminContact from "../admin/pages/AdminContact";
import AdminCareers from "../admin/pages/AdminCareer";


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="brands" element={<AdminBrands />} />
        <Route path="blogs" element={<AdminBlog />} />
        <Route path="contact" element={<AdminContact />} />
        <Route path="carrers" element={<AdminCareers />} />
        {/* Future routes can go here:
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="career" element={<CareerPage />} /> */}
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
