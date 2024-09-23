import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import Admin from "@/pages/admin";
import RegisterPage from "@/pages/register";
// import { AddProductDialog } from "./pages/fileupload";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<Admin />} path="/admin" />  {/* Add Admin route */}
      <Route element={<RegisterPage />} path="/register" />  {/* Add Register route */}
      {/* <Route element={<AddProductDialog />} path="/add" />   */}
    </Routes>
  );
}

export default App;
