import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import SignUp from "@/pages/signup";
// import PricingPage from "@/pages/pricing";
import PostPage from "@/pages/post";
import AboutPage from "@/pages/about";
import Admin from "@/pages/admin";
import RegisterPage from "@/pages/register";
// import UserPage from "@/pages/pricing";
// import { FloatingDockDemo } from "./pages/floatdock";
// import { NavbarDemo } from "./pages/navbar-float";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<SignUp />} path="/signup" />
      {/* <Route element={<PricingPage />} path="/pricing" /> */}
      <Route element={<PostPage />} path="/post" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<Admin />} path="/admin" />  {/* Add Admin route */}
      <Route element={<RegisterPage />} path="/register" />  {/* Add Register route */}
      {/* <Route element={<FloatingDockDemo />} path="/floatdock" /> */}
      {/* <Route element={<UserPage />} path="/user" /> */}
      {/* <Route element={<NavbarDemo />} path="/navbar" /> */}
    </Routes>
  );
}

export default App;
