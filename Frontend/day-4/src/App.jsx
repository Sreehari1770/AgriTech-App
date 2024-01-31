import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserDashBoard from "./pages/UserDashBoard";
import ProfilePage from "./pages/ProfilePage";
import LoanPage from "./pages/Loanpage";
import SchemesPage from "./pages/SchemesPage";
import LoanAppPage from './pages/LoanAppPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import FundPage from './pages/FundAllocation';
import UserManagement from './pages/UserDetails';
import LoanManagement from './pages/LoanDetails';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/dashboard" element={<UserDashBoard/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/loan" element={<LoanPage/>}/>
        <Route path="/schemes" element={<SchemesPage/>}/>
        <Route path="/fund-allocation" element={<FundPage/>}/>
        <Route path="/loan/getloan" element={<LoanAppPage/>}/>
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/userdetails" element={<UserManagement/>}/>
        <Route path="/admin/loandetails" element={<LoanManagement/>}/>

      </Routes>
    </Router>
  );
}

export default App;
