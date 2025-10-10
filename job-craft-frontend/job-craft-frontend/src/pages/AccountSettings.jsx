import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../home.css";
import "../jobseeker.css";

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Account settings updated successfully!");
    // Add API call or state update here
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Navbar */}
      <header>
        <div className="logo">Job Craft</div>
        <nav>
          <ul>
            <li><Link to="/jobseeker">Home</Link></li>
            <li><Link to="/applications">Jobs</Link></li>
            <li className="dropdown">
              <span className="profile-icon">👤 Profile</span>
              <div className="dropdown-content">
                <Link to="/manage-profile">Manage Profile</Link>
                <Link to="/AppliedJobs">Applied Jobs</Link>
                <Link to="/account-settings">Account Settings</Link>
                <a href="/" onClick={() => window.confirm("Sign out?")}>Sign Out</a>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      {/* Page Content */}
      <div className="page-section">
        <div className="container" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2>Account Settings</h2>
          <p>Update your personal details and password</p>

          <form onSubmit={handleSubmit} className="account-form">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>
              Update Settings
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
