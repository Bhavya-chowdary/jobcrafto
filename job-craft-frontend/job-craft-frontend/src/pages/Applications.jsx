import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import '../applications.css';

const Applications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const dropdownRef = useRef(null);

  const jobs = [
    { 
      id: 1, 
      title: "Senior Frontend Developer", 
      company: "Google", 
      location: "Mountain View, CA",
      type: "Full-time",
      salary: "$120K - $180K",
      description: "Build cutting-edge web applications using React, TypeScript, and modern frontend technologies. Join our innovative team to create user experiences that impact billions of users worldwide.",
      logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
      posted: "2 days ago",
      tags: ["React", "TypeScript", "JavaScript", "CSS"]
    },
    { 
      id: 2, 
      title: "Backend Software Engineer", 
      company: "Microsoft", 
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$110K - $160K",
      description: "Design and implement scalable backend systems using Node.js, Python, and cloud technologies. Work on high-impact projects that serve millions of users globally.",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
      posted: "1 day ago",
      tags: ["Node.js", "Python", "AWS", "Docker"]
    },
    { 
      id: 3, 
      title: "UI/UX Designer", 
      company: "Apple", 
      location: "Cupertino, CA",
      type: "Full-time",
      salary: "$100K - $150K",
      description: "Create intuitive and beautiful user interfaces for our next-generation products. Collaborate with cross-functional teams to deliver exceptional user experiences.",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
      posted: "3 days ago",
      tags: ["Figma", "Sketch", "Adobe XD", "Prototyping"]
    },
    { 
      id: 4, 
      title: "Data Scientist", 
      company: "Netflix", 
      location: "Los Gatos, CA",
      type: "Full-time",
      salary: "$130K - $190K",
      description: "Analyze complex datasets to drive business decisions and improve user experience. Build machine learning models that power our recommendation systems.",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
      posted: "4 days ago",
      tags: ["Python", "Machine Learning", "SQL", "Statistics"]
    },
    { 
      id: 5, 
      title: "Product Manager", 
      company: "Amazon", 
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$140K - $200K",
      description: "Lead product strategy and development for our e-commerce platform. Work with engineering, design, and business teams to deliver customer-focused solutions.",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888839.png",
      posted: "1 week ago",
      tags: ["Product Strategy", "Analytics", "Agile", "Leadership"]
    },
    { 
      id: 6, 
      title: "DevOps Engineer", 
      company: "Meta", 
      location: "Menlo Park, CA",
      type: "Full-time",
      salary: "$125K - $175K",
      description: "Manage and scale our infrastructure using modern DevOps practices. Implement CI/CD pipelines and ensure high availability of our services.",
      logo: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
      posted: "5 days ago",
      tags: ["Kubernetes", "AWS", "Docker", "Terraform"]
    },
    { 
      id: 7, 
      title: "Full Stack Developer", 
      company: "Tesla", 
      location: "Palo Alto, CA",
      type: "Full-time",
      salary: "$115K - $165K",
      description: "Develop end-to-end solutions for our automotive and energy products. Work with cutting-edge technologies in a fast-paced, innovative environment.",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888847.png",
      posted: "6 days ago",
      tags: ["React", "Node.js", "Python", "MongoDB"]
    },
    { 
      id: 8, 
      title: "Mobile App Developer", 
      company: "Uber", 
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120K - $170K",
      description: "Build mobile applications that connect riders and drivers worldwide. Work with React Native and native iOS/Android development.",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888841.png",
      posted: "2 days ago",
      tags: ["React Native", "iOS", "Android", "JavaScript"]
    },
    { 
      id: 9, 
      title: "Cybersecurity Engineer", 
      company: "IBM", 
      location: "Armonk, NY",
      type: "Full-time",
      salary: "$110K - $160K",
      description: "Protect our systems and data from cyber threats. Implement security measures and conduct vulnerability assessments to ensure robust security posture.",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888842.png",
      posted: "1 week ago",
      tags: ["Security", "Python", "Linux", "Networking"]
    },
    { 
      id: 10, 
      title: "AI/ML Engineer", 
      company: "OpenAI", 
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$150K - $220K",
      description: "Develop and deploy machine learning models for natural language processing and AI applications. Work on cutting-edge AI research and development.",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888844.png",
      posted: "3 days ago",
      tags: ["Python", "TensorFlow", "PyTorch", "NLP"]
    },
    { 
      id: 11, 
      title: "Software Engineer", 
      company: "Spotify", 
      location: "New York, NY",
      type: "Full-time",
      salary: "$130K - $180K",
      description: "Build scalable music streaming applications and work on recommendation algorithms that serve millions of users worldwide.",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
      posted: "1 week ago",
      tags: ["Java", "Python", "Kafka", "Docker"]
    },
    { 
      id: 12, 
      title: "Frontend Developer", 
      company: "Airbnb", 
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120K - $170K",
      description: "Create beautiful and intuitive user interfaces for our travel platform. Work with React and modern frontend technologies.",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
      posted: "5 days ago",
      tags: ["React", "TypeScript", "CSS", "GraphQL"]
    },
    { 
      id: 13, 
      title: "Backend Developer", 
      company: "Twitter", 
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$125K - $175K",
      description: "Build and maintain high-performance backend systems that handle millions of tweets and user interactions daily.",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
      posted: "2 days ago",
      tags: ["Scala", "Java", "Kafka", "Redis"]
    },
    { 
      id: 14, 
      title: "DevOps Engineer", 
      company: "GitHub", 
      location: "Remote",
      type: "Remote",
      salary: "$110K - $160K",
      description: "Manage infrastructure and deployment pipelines for the world's largest code hosting platform.",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
      posted: "4 days ago",
      tags: ["AWS", "Kubernetes", "Terraform", "Docker"]
    },
    { 
      id: 15, 
      title: "Product Designer", 
      company: "Figma", 
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$100K - $150K",
      description: "Design intuitive and powerful tools for collaborative design. Work on the future of design software.",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
      posted: "6 days ago",
      tags: ["Figma", "Sketch", "Prototyping", "User Research"]
    }
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const signOut = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      window.location.href = "/jobseeker";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleApply = (job) => {
    // Check if user is logged in (you can implement proper auth check here)
    const isLoggedIn = true; // For demo purposes, assuming user is logged in
    if (isLoggedIn) {
      alert(`Applied to ${job.title} at ${job.company}!`);
      // Here you would typically add the job to applied jobs list
    } else {
      alert("Please sign in first to apply for jobs");
      window.location.href = "/login";
    }
  };

  const handleDetails = (job) => {
    setSelectedJob(job);
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedJob(null);
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
            <li className="dropdown" ref={dropdownRef}>
              <span className="profile-icon" onClick={toggleDropdown}>👤 Profile</span>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to="/manage-profile">Manage Profile</Link>
                  <Link to="/SavedJobs">Saved Jobs</Link>
                  <Link to="/AppliedJobs">Applied Jobs</Link>
                  <Link to="/AccountSettings">Account Settings</Link>
                  <a href="#" onClick={signOut}>Sign Out</a>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* Page Content */}
      <div className="page-section">
        <div className="container">
          <div className="page-header">
            <h1>Available Jobs</h1>
            <p>Browse and apply to job opportunities</p>
            <div className="job-count">
              <span className="count-number">{filteredJobs.length}</span>
              <span className="count-text">jobs found</span>
            </div>
          </div>

          <div className="search-section">
            <input
              type="text"
              placeholder="Search jobs by title or company..."
              className="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid grid-2">
            {filteredJobs.map((job) => (
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
                  <span className="job-type">{job.type}</span>
                  <span className="job-salary">💰 {job.salary}</span>
                  <span className="job-posted">⏰ {job.posted}</span>
                </div>
                
                <p className="job-description">{job.description}</p>
                
                <div className="job-tags">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="job-actions">
                  <button
                    onClick={() => handleDetails(job)}
                    className="btn btn-secondary"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => {
                      alert(`Saved ${job.title} at ${job.company} to your saved jobs!`);
                    }}
                    className="btn btn-outline"
                  >
                    Save
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

          {filteredJobs.length === 0 && (
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <p>No jobs found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Details Modal */}
      {showDetailsModal && selectedJob && (
        <div className="modal-overlay" onClick={closeDetailsModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Job Details</h2>
              <button className="close-btn" onClick={closeDetailsModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="job-detail-header">
                <div className="company-logo">
                  <img src={selectedJob.logo} alt={`${selectedJob.company} logo`} />
                </div>
                <div className="job-detail-info">
                  <h3>{selectedJob.title}</h3>
                  <p className="company-name">{selectedJob.company}</p>
                </div>
              </div>
              
              <div className="job-detail-meta">
                <div className="detail-item">
                  <span className="detail-label">📍 Location:</span>
                  <span className="detail-value">{selectedJob.location}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">💼 Type:</span>
                  <span className="detail-value">{selectedJob.type}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">💰 Salary:</span>
                  <span className="detail-value">{selectedJob.salary}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">⏰ Posted:</span>
                  <span className="detail-value">{selectedJob.posted}</span>
                </div>
              </div>
              
              <div className="job-detail-description">
                <h4>Job Description</h4>
                <p>{selectedJob.description}</p>
              </div>
              
              <div className="job-detail-skills">
                <h4>Required Skills</h4>
                <div className="skills-list">
                  {selectedJob.tags.map((tag, index) => (
                    <span key={index} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={closeDetailsModal}>
                Close
              </button>
              <button className="btn btn-primary" onClick={() => {
                closeDetailsModal();
                handleApply(selectedJob);
              }}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applications;
