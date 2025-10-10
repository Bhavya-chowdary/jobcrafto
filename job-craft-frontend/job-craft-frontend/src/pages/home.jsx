import React from "react";
import { Link } from "react-router-dom";
import "../home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const jobs = [
  {
    type: "Full Time",
    location: "Remote",
    logo: "https://logo.clearbit.com/google.com",
    title: "Software Developer",
    company: "Google",
    description: "Work on cutting-edge technologies at scale.",
    time: "2h ago",
    salary: "$120K - $150K",
  },
  {
    type: "Internship",
    location: "Bangalore",
    logo: "https://logo.clearbit.com/amazon.com",
    title: "UI/UX Designer Intern",
    company: "Amazon",
    description: "Design intuitive UIs for eCommerce at scale.",
    time: "5h ago",
    salary: "$1K/mo",
  },
  {
    type: "Contract",
    location: "USA",
    logo: "https://logo.clearbit.com/microsoft.com",
    title: "Data Analyst",
    company: "Microsoft",
    description: "Analyze data and support strategic decisions.",
    time: "1d ago",
    salary: "$80K - $100K",
  },
  {
    type: "Part Time",
    location: "Remote",
    logo: "https://logo.clearbit.com/netflix.com",
    title: "Content Curator",
    company: "Netflix",
    description: "Manage and curate media for platform users.",
    time: "3h ago",
    salary: "$60K - $80K",
  },
  {
    type: "Full Time",
    location: "Mumbai",
    logo: "https://logo.clearbit.com/tesla.com",
    title: "Machine Learning Engineer",
    company: "Tesla",
    description: "Build predictive models for autonomous systems.",
    time: "6h ago",
    salary: "$130K - $160K",
  },
  {
    type: "Internship",
    location: "Delhi",
    logo: "https://logo.clearbit.com/zoho.com",
    title: "Frontend Intern",
    company: "Zoho",
    description: "Work on user-facing features using React.",
    time: "1d ago",
    salary: "$800/mo",
  },
  {
    type: "Contract",
    location: "Remote",
    logo: "https://logo.clearbit.com/adobe.com",
    title: "Visual Designer",
    company: "Adobe",
    description: "Create designs for enterprise software UI.",
    time: "2d ago",
    salary: "$90K - $110K",
  },
];

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="logo">Job Craft</div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
          </ul>
          <div className="menu-toggle">&#9776;</div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-background">
            <div className="hero-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
          
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="gradient-text">Transform Your Career</span>
                <br />
                <span className="subtitle">Find Your Perfect Job Match</span>
              </h1>
              <p className="hero-description">
                Join thousands of professionals who found their dream jobs through our platform. 
                Advanced matching, real-time updates, and personalized recommendations.
              </p>
              
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Active Jobs</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">Companies</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1M+</span>
                  <span className="stat-label">Job Seekers</span>
                </div>
              </div>
            </div>
            
            <div className="hero-search">
              <div className="search-container">
                <div className="search-input-group">
                  <div className="input-wrapper">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Job title, skills, or company" />
                  </div>
                  <div className="input-wrapper">
                    <i className="fas fa-map-marker-alt"></i>
                    <select>
                      <option value="">All Locations</option>
                      <option value="remote">Remote</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="delhi">Delhi</option>
                    </select>
                  </div>
                  <button className="search-btn">
                    <i className="fas fa-search"></i>
                    Find Jobs
                  </button>
                </div>
                
                <div className="popular-searches">
                  <span>Popular:</span>
                  <span className="tag">Frontend Developer</span>
                  <span className="tag">Data Scientist</span>
                  <span className="tag">Product Manager</span>
                  <span className="tag">UX Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

<section className="section featured-jobs-style2">
  <h2>🔥 Featured Jobs</h2>
  <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={3}
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000 }}
    breakpoints={{
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    style={{ paddingBottom: "2rem" }}
  >
    {jobs.map((job, index) => (
      <SwiperSlide key={index}>
        <div className="job-card2">
          <div className="job-card-header">
            <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
            <div className="job-meta">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">{job.company}</p>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star" style={{ color: "#0033cc" }}></i>
                ))}
              </div>
            </div>
          </div>
          <p className="job-desc">{job.description}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>


{/* Top Companies */}
;

<section style={{ textAlign: "center", background: "#f7f9fc", padding: "2rem 1rem" }}>
  <h2>🏢 Top Companies Hiring</h2>
  <Swiper
    modules={[Pagination]}
    slidesPerView={2}
    spaceBetween={30}
    pagination={{ clickable: true }}
    breakpoints={{
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    }}
    style={{ padding: "2rem 0", maxWidth: "1200px", margin: "0 auto" }}
  >
    {[
      { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", openings: "120+ openings" },
      { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", openings: "85+ openings" },
      { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", openings: "60+ openings" },
      { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", openings: "30+ openings" },
      { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", openings: "50+ openings" },
      { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", openings: "70+ openings" },
    ].map((company, i) => (
      <SwiperSlide key={i}>
        <div style={{
          textAlign: "center",
          background: "#fff",
          padding: "1rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}>
          <img src={company.logo} alt={company.name} style={{ width: "80px", height: "auto", marginBottom: "1rem" }} />
          <p style={{ fontSize: "1rem", color: "#333" }}>
            <strong>{company.name}</strong><br />
            {company.openings}
          </p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>
{/* Testimonials */}
<section style={{ background: "#f2f7f6", padding: "3rem 1rem" }}>
  <h2 style={{ textAlign: "center", color: "#0033a0" }}>⭐ Success Stories</h2>
  <div style={{
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
    marginTop: "2rem"
  }}>
    {[
      {
        name: "Alex",
        role: "Frontend Developer",
        feedback: "Job Craft helped me land my dream job within a month!",
        img: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      {
        name: "Sara",
        role: "Marketing Analyst",
        feedback: "A fantastic platform to grow professionally!",
        img: "https://randomuser.me/api/portraits/women/68.jpg"
      },
      {
        name: "David",
        role: "Full Stack Engineer",
        feedback: "Thanks to Job Craft, I switched to a better company with great benefits.",
        img: "https://randomuser.me/api/portraits/men/75.jpg"
      },
      {
        name: "Priya",
        role: "UX Designer",
        feedback: "I found exactly the kind of job I was looking for. Highly recommend!",
        img: "https://randomuser.me/api/portraits/women/25.jpg"
      },
    ].map((user, i) => (
      <div key={i} style={{
        background: "white",
        borderRadius: "10px",
        padding: "1rem",
        maxWidth: "300px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>
        <img src={user.img} alt={user.name} style={{
          borderRadius: "50%",
          width: "80px",
          height: "80px",
          objectFit: "cover"
        }} />
        <h4 style={{ marginTop: "1rem" }}>{user.name}</h4>
        <p style={{ fontWeight: "bold" }}>{user.role}</p>
        <p>“{user.feedback}”</p>
      </div>
    ))}
  </div>
</section>


        {/* How It Works */}
        <section className="section how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step"><i className="fas fa-user-plus"></i><h3>Sign Up</h3><p>Create your free account</p></div>
            <div className="step"><i className="fas fa-file-alt"></i><h3>Build Profile</h3><p>Add your skills and experience</p></div>
            <div className="step"><i className="fas fa-search"></i><h3>Find Jobs</h3><p>Browse and apply easily</p></div>
            <div className="step"><i className="fas fa-rocket"></i><h3>Get Hired</h3><p>Start your new journey</p></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="about-us">
            <h3>About Us</h3>
            <p>We connect job seekers and recruiters worldwide, making hiring seamless and efficient.</p>
          </div>
          <div className="feedback">
            <h3>Feedback</h3>
            <textarea placeholder="Your feedback"></textarea>
            <button>Submit</button>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p>&copy; 2025 Job Craft. All rights reserved. | Connecting talent with opportunity globally.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
