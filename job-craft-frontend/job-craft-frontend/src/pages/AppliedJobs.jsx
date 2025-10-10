import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../applications.css"; // reuse CSS

const AppliedJobs = () => {
  // Demo applied jobs
  const [appliedJobs, setAppliedJobs] = useState([
    { 
      id: 1, 
      title: "Senior Frontend Developer", 
      company: "Google", 
      location: "Mountain View, CA",
      description: "Build cutting-edge web applications using React, TypeScript, and modern frontend technologies.", 
      status: "Applied", 
      appliedDate: "2025-01-20",
      logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
      salary: "$120K - $180K"
    },
    { 
      id: 2, 
      title: "Backend Software Engineer", 
      company: "Microsoft", 
      location: "Seattle, WA",
      description: "Design and implement scalable backend systems using Node.js, Python, and cloud technologies.", 
      status: "Interview Scheduled", 
      appliedDate: "2025-01-18",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
      salary: "$110K - $160K"
    },
    { 
      id: 3, 
      title: "UI/UX Designer", 
      company: "Apple", 
      location: "Cupertino, CA",
      description: "Create intuitive and beautiful user interfaces for our next-generation products.", 
      status: "Rejected", 
      appliedDate: "2025-01-15",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
      salary: "$100K - $150K"
    },
  ]);

  const handleStatusChange = (jobId, newStatus) => {
    setAppliedJobs(
      appliedJobs.map((job) =>
        job.id === jobId ? { ...job, status: newStatus } : job
      )
    );
  };

  const handleRemoveJob = (jobId) => {
    if (window.confirm("Are you sure you want to remove this job application?")) {
      setAppliedJobs(appliedJobs.filter((job) => job.id !== jobId));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Applied":
        return "status-applied";
      case "Interview Scheduled":
        return "status-interview";
      case "Rejected":
        return "status-rejected";
      case "Accepted":
        return "status-accepted";
      default:
        return "status-applied";
    }
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Navbar */}
      <header>
        <div className="logo">Job Craft</div>
        <nav>
          <ul>
            <li><Link to="/jobseeker">Home</Link></li>
            <li><Link to="/applications">Available Jobs</Link></li>
            <li><Link to="/AppliedJobs">Applied Jobs</Link></li>
            <li className="dropdown">
              <span className="profile-icon">👤 Profile</span>
              <div className="dropdown-content">
                <Link to="/manage-profile">Manage Profile</Link>
                <Link to="/SavedJobs">Saved Jobs</Link>
                <Link to="/AppliedJobs">Applied Jobs</Link>
                <Link to="/AccountSettings">Account Settings</Link>
                <a href="#">Sign Out</a>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <div className="page-section">
        <div className="container">
          <div className="page-header">
            <h1>Applied Jobs</h1>
            <p>Track the status of your job applications</p>
          </div>

          {appliedJobs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "3rem" }}>
              <h3>No Applied Jobs Yet</h3>
              <p>Start applying to jobs from the Applications page to see them here.</p>
              <a href="/applications" className="btn btn-primary" style={{ marginTop: "1rem" }}>
                Browse Jobs
              </a>
            </div>
          ) : (
            <div className="grid grid-2">
              {appliedJobs.map((job) => (
                <div key={job.id} className="applied-job-card">
                  <div className="job-header">
                    <div className="company-logo">
                      <img src={job.logo} alt={`${job.company} logo`} />
                    </div>
                    <div className="job-basic-info">
                      <h3 className="job-title">{job.title}</h3>
                      <p className="job-company">{job.company}</p>
                      <p className="job-location">📍 {job.location}</p>
                    </div>
                  </div>

                  <div className="job-meta">
                    <span className="job-salary">💰 {job.salary}</span>
                    <span className="applied-date">📅 Applied: {job.appliedDate}</span>
                  </div>

                  <p className="job-description">{job.description}</p>

                  <div className="status-controls">
                    <div className="status-section">
                      <label htmlFor={`status-${job.id}`} className="status-label">
                        Update Status:
                      </label>
                      <select
                        id={`status-${job.id}`}
                        className="status-select"
                        value={job.status}
                        onChange={(e) => handleStatusChange(job.id, e.target.value)}
                      >
                        <option value="Applied">Applied</option>
                        <option value="Interview Scheduled">Interview Scheduled</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Accepted">Accepted</option>
                      </select>
                    </div>

                    <div className="status-actions">
                      <span className={`status-badge ${getStatusColor(job.status)}`}>
                        {job.status}
                      </span>
                      <button
                        onClick={() => handleRemoveJob(job.id)}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
