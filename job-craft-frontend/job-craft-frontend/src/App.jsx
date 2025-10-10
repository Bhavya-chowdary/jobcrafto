import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/home";
import JobSeeker from "./pages/jobseeker";
import ManageProfile from "./pages/ManageProfile";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import AdminDashboard from "./pages/admin"; 
import ContactUs from "./pages/contactus";
import Applications from "./pages/Applications";
import AppliedJobs from "./pages/AppliedJobs";
import SavedJobs from "./pages/SavedJobs";
import AccountSettings from "./pages/AccountSettings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobseeker" element={<JobSeeker />} />
        <Route path="/manage-profile" element={<ManageProfile />} />
        <Route path="/recruiter" element={<RecruiterDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} /> 
        <Route path="/applications" element={<Applications />} />
        <Route path="/AppliedJobs" element={<AppliedJobs />} />
        <Route path="/SavedJobs" element={<SavedJobs />} />
        <Route path="/AccountSettings" element={<AccountSettings />} />


 
      </Routes>
    </Router>
  );
};

export default App;
