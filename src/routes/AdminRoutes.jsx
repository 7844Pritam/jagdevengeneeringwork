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
      
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
