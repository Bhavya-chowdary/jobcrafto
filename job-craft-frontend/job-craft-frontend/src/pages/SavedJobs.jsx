import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../applications.css";

const SavedJobs = () => {
  // Demo saved jobs
  const [savedJobs, setSavedJobs] = useState([
    { 
      id: 1, 
      title: "Senior Frontend Developer", 
      company: "Google", 
      location: "Mountain View, CA",
      description: "Build cutting-edge web applications using React, TypeScript, and modern frontend technologies.", 
      savedDate: "2025-01-20",
      logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
      salary: "$120K - $180K",
      type: "Full-time"
    },
    { 
      id: 2, 
      title: "Backend Software Engineer", 
      company: "Microsoft", 
      location: "Seattle, WA",
      description: "Design and implement scalable backend systems using Node.js, Python, and cloud technologies.", 
      savedDate: "2025-01-18",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
      salary: "$110K - $160K",
      type: "Full-time"
    },
    { 
      id: 3, 
      title: "UI/UX Designer", 
      company: "Apple", 
      location: "Cupertino, CA",
      description: "Create intuitive and beautiful user interfaces for our next-generation products.", 
      savedDate: "2025-01-15",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
      salary: "$100K - $150K",
      type: "Full-time"
    },
  ]);

  const handleRemoveJob = (jobId) => {
    if (window.confirm("Are you sure you want to remove this job from saved jobs?")) {
      setSavedJobs(savedJobs.filter((job) => job.id !== jobId));
    }
  };

  const handleApply = (job) => {
    alert(`Applied to ${job.title} at ${job.company}!`);
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
                <a href="#">Applied Jobs</a>
                <a href="#">Account Settings</a>
                <a href="#">Sign Out</a>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <div className="page-section">
        <div className="container">
          <div className="page-header">
            <h1>Saved Jobs</h1>
            <p>Your bookmarked job opportunities</p>
          </div>

          {savedJobs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "3rem" }}>
              <h3>No Saved Jobs Yet</h3>
              <p>Start saving jobs from the Applications page to see them here.</p>
              <Link to="/applications" className="btn btn-primary" style={{ marginTop: "1rem" }}>
                Browse Jobs
              </Link>
            </div>
          ) : (
            <div className="grid grid-2">
              {savedJobs.map((job) => (
                <div key={job.id} className="job-card">
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
                    <span className="job-type">{job.type}</span>
                    <span className="saved-date">📅 Saved: {job.savedDate}</span>
                  </div>

                  <p className="job-description">{job.description}</p>

                  <div className="job-actions">
                    <button
                      onClick={() => handleRemoveJob(job.id)}
                      className="btn btn-secondary"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => handleApply(job)}
                      className="btn btn-primary"
                    >
                      Apply Now
                    </button>
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

export default SavedJobs;
