import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HeaderLayout from './components/header/HeaderLayout';
import { AppRoutes } from "./utils/constant";

import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import AllCategories from "./pages/AllCategories/AllCategories";
import OrganizationPage from "./pages/organization/OrganizationPage";
import SearchResults from './pages/search/searchResults';
import BlogsPage from './pages/blogs/BlogsPage';
import BlogPost  from './pages/blogs/BlogPost';
import FAQPage from './pages/FAQPage';
import ContactPage  from './pages/ContactPage';
import AboutPage  from './pages/AboutPage';
import HelpCenter  from './pages/HelpCenter';
import ScrollToTop from './components/scrollTop/ScrollTop';
import Verification from "./components/common/Verification/Verification";
import Dashboard from './pages/user/Dashboard/UserDashboard';
import { UserProvider } from "./utils/UseContext/UserContext";
import UserRegisterPage from "./pages/UserRegisterPage";

import UserDashboard from "./pages/user/Dashboard/UserDashboard";
import ReviewForm from "./pages/user/ReviewForm/ReviewForm";
import EditDetails from "./pages/user/Dashboard/EditDetails";
// import CompanyListingPage from "./pages/CompanyListingPage/CompanyListingPage";

// import Footer from "./components/CommonComponent/Footer";
// import Header_In from "./components/CommonComponent/Header_In/Header_In";




const AppRoutesWithLayout = () => {
  const location = useLocation();

  const isCompanyListing =
    location.pathname === "/companylisting" ||
    location.pathname === "/reviews" ||
    location.pathname === "/reviewform" ||
    location.pathname === "/dashboard" ;
  
  return (
    <>
      <ScrollToTop />
      <UserProvider>
      <Routes>
         {/* Auth routes without layout (no header/footer) */}
        <Route path={AppRoutes.LoginPage} element={<LoginPage />} />
        <Route path={AppRoutes.RegisterPage} element={<RegisterPage />} />
        <Route path={AppRoutes.VerificationPage} element={<Verification />} />
        <Route path={AppRoutes.UserRegisterPage} element={<UserRegisterPage />} />
        
        {/* All other routes with layout (with header/footer) */}
        <Route element={<HeaderLayout />}>
          <Route path={AppRoutes.Home} element={<Home />} />
          <Route path={AppRoutes.AllCategories} element={<AllCategories />} />
          <Route path={AppRoutes.SearchResults} element={<SearchResults />} />
          <Route path={AppRoutes.OrganizationPage} element={<OrganizationPage />} />
          <Route path={AppRoutes.BlogsPage} element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path={AppRoutes.FAQPage} element={<FAQPage />} />
          <Route path={AppRoutes.ContactPage} element={<ContactPage />} />
          <Route path={AppRoutes.AboutPage} element={<AboutPage />} />
          <Route path={AppRoutes.HelpCenter} element={<HelpCenter />} />
          <Route path={AppRoutes.Dashboard} element={<Dashboard/>}/>
          <Route path={AppRoutes.ReviewForm} element={<ReviewForm/>}/>
          
          <Route path={AppRoutes.UserDashboard} element={<UserDashboard />} />
          <Route path={AppRoutes.EditDetails} element={<EditDetails />} />
          {/* Add all other routes that need header/footer here */}
        </Route>
      </Routes>
      </UserProvider>
    </>
  );
};

export default AppRoutesWithLayout;
