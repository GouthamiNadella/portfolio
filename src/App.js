import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Distributed Message Queue System",
      tech: ["Python", "Flask", "Threading", "File I/O"],
      description: "Built a fault-tolerant distributed message queue system with 3-node replication and write-ahead logging for data durability. Implemented asynchronous replication protocol with acknowledgment-based delivery guarantees and thread-safe concurrent operations. Features crash recovery with at-least-once delivery semantics and pending/acked message tracking.",
      github: "https://github.com/GouthamiNadella/distributed_message_queue_system",
      demo: null
    },
    {
      id: 2,
      title: "Subscription Management Platform",
      tech: ["Spring Boot", "React", "MySQL", "Material-UI", "JavaMail API"],
      description: "Full-stack subscription tracker with automated email notifications 3 days before renewals, reducing unnoticed renewals by 25%. Integrated webhooks for payment providers and implemented scheduled tasks using Spring Scheduler. Includes analytics dashboard with monthly spending trends and category breakdowns.",
      github: "https://github.com/GouthamiNadella/subscription-tracker-backend",
      demo: "https://subscription-tracker-frontend-chi.vercel.app/login"
    },
    {
      id: 3,
      title: "SkinSync - AI Skincare Recommendation Platform",
      tech: ["React TypeScript", "FastAPI", "Gemini API", "AWS", "PostgreSQL"],
      description: "Built a full-stack skincare platform with FastAPI backend and React TypeScript frontend. The system features 8 REST endpoints with an intelligent search flow that queries a local JSON database of 1500+ products, falling back to Gemini API for new products while automatically saving them to reduce API costs by 70%. Implemented a multi-step compatibility wizard analyzing ingredient conflicts using hardcoded rules (retinol + AHA) and AI-generated analysis considering skin type. The scoring algorithm weights conflicts at 40%, skin type compatibility at 30%, and ingredient synergy at 30%. Deployed on Vercel with proper CORS configuration, environment variables for API keys, and DOMPurify sanitization for XSS protection.",
      github: "https://github.com/GouthamiNadella/skinsync-backend",
      demo: "https://skinsync-frontend.vercel.app/"
    },
    {
      id: 4,
      title: "Gmail VIP Notifier Chrome Extension",
      tech: ["JavaScript", "Chrome APIs", "Gmail API", "OAuth 2.0", "Manifest V3"],
      description: "Developed Manifest V3 Chrome extension with service worker monitoring Gmail every 3 minutes for important contacts using OAuth 2.0 and Gmail API integration. Built complete authentication flow with Chrome Identity API including token caching, validation, and automatic refresh handling expired credentials. Implemented batch email processing (5 emails/batch) with rate limit protection analyzing 20+ recent messages and matching against user-defined VIP contacts. Created polished popup interface with contact management, real-time status updates, and rich Chrome notifications with actionable buttons for email triage.",
      github: "https://github.com/GouthamiNadella",
      demo: null
    },
    {
      id: 5,
      title: "Beverage Sales Analytics & Forecasting Platform",
      tech: ["Python", "Pandas", "Prophet", "Scikit-learn", "Power BI", "Seaborn"],
      description: "Built comprehensive sales analytics system with Prophet time-series forecasting, customer segmentation using K-means clustering, and product affinity analysis. Implemented linear regression models for dynamic pricing simulation with ±5-10% discount scenarios. Features repeat customer behavior analysis, profitability scoring with tier classification, and market basket analysis for product bundling recommendations. Integrated interactive Power BI dashboard with KPIs tracking revenue trends, regional performance, and inventory forecasting.",
      github: "https://github.com/GouthamiNadella/beverage-sales-analytics",
      demo: null
    },
    {
      id: 6,
      title: "Smart Invoice Generator with Auto-Save",
      tech: ["React", "Tailwind CSS", "Lucide React", "Local Storage", "Print API"],
      description: "Built full-stack invoice management system with real-time preview and PDF export functionality. Implemented auto-save mechanism with 30-second intervals and local storage persistence for business info and invoice data. Features status tracking (Saved/Generated/Pending/Paid), filter-based search, itemized billing with automatic tax and discount calculations. Includes responsive design with mobile-optimized touch interface and client-side data privacy with no server dependency.",
      github: "https://github.com/GouthamiNadella/smart-invoice-generator",
      demo: null
    },
    {
      id: 7,
      title: "Elixir Data Structure Parser",
      tech: ["Python", "Regex", "Recursive Descent Parsing"],
      description: "Implemented a hand-written parser for Elixir-style data structures including lists, tuples, maps, atoms, booleans, and integers. Built a custom lexer with regex-based tokenization supporting 12+ token types. Generates JSON AST representation with comprehensive error handling including line/column tracking and detailed error messages.",
      github: "https://github.com/GouthamiNadella/parser",
      demo: null
    },
    {
      id: 8,
      title: "Full-Stack Library Management System",
      tech: ["React", "Spring Boot", "MySQL", "JWT Authentication", "Axios", "React Router"],
      description: "Built a complete library management system with role-based access control for students and librarians. Features include book borrowing/returning with 15-day limit tracking, real-time availability updates, search functionality, and admin dashboard for managing books and users. Implemented JWT authentication with token expiration handling and comprehensive CRUD operations for books and borrowing records.",
      github: "https://github.com/GouthamiNadella/libraryMangement",
      demo: null
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>Software Developer</span>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-item" onClick={() => scrollToSection('home')}>
              <span className={activeSection === 'home' ? 'active' : ''}>Home</span>
            </div>
            <div className="nav-item" onClick={() => scrollToSection('about')}>
              <span className={activeSection === 'about' ? 'active' : ''}>About</span>
            </div>
            <div className="nav-item" onClick={() => scrollToSection('experience')}>
              <span className={activeSection === 'experience' ? 'active' : ''}>Experience</span>
            </div>
            <div className="nav-item" onClick={() => scrollToSection('projects')}>
              <span className={activeSection === 'projects' ? 'active' : ''}>Projects</span>
            </div>
            <div className="nav-item" onClick={() => scrollToSection('skills')}>
              <span className={activeSection === 'skills' ? 'active' : ''}>Skills</span>
            </div>
            <div className="nav-item" onClick={() => scrollToSection('education')}>
              <span className={activeSection === 'education' ? 'active' : ''}>Education</span>
            </div>
            <div className="nav-item" onClick={() => scrollToSection('contact')}>
              <span className={activeSection === 'contact' ? 'active' : ''}>Contact</span>
            </div>
          </div>
          <div className="nav-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Gouthami Nadella</h1>
            <h2>Software Developer</h2>
            <p>Building scalable full-stack applications with React, Spring Boot, cloud infrastructure, and AI/ML integration</p>
            <div className="hero-buttons">
              <button className="btn-secondary" onClick={() => scrollToSection('projects')}>View My Projects</button>
              <button className="btn-primary" onClick={() => scrollToSection('contact')}>Contact Me</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/profile.png" alt="Gouthami Nadella" className="profile-image" />
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              I'm a Computer Science graduate student at Binghamton University with over 2 years of professional 
              experience at Accenture, where I gained extensive expertise in full-stack development, cloud 
              technologies, and software engineering.
            </p>
            <p>
              I'm passionate about building scalable applications and APIs using modern frameworks like React, 
              Spring Boot, and Flask, and deploying them on AWS and GCP. I enjoy tackling real-world problems 
              through innovative solutions and continuously learning new technologies to refine my craft. 
              Interestingly, I often find that I'm most productive under pressure—it drives my creativity and focus.
            </p>
            <p>
              Outside of tech, I love playing badminton, painting, and spending time in my own company. These 
              hobbies help me stay balanced, inspired, and ready for the next challenge.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">July 2025 - Present</div>
              <div className="timeline-content">
                <h3>Sodexo</h3>
                <h4>Intern</h4>
                <p>Binghamton, NewYork</p>
                <ul>
                  <li>Developed internal applications using SpringBoot, React, and SQL Server for inventory management and reporting</li>
                  <li>Automated repetitive tasks using scripting tools, reducing manual effort and improving operational efficiency</li>
                  <li>Documented solutions and best practices to streamline future issue resolution</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Aug 2021 - Dec 2023</div>
              <div className="timeline-content">
                <h3>Accenture</h3>
                <h4>Associate Software Developer</h4>
                <p>Hyderabad, India</p>
                <ul>
                  <li>Engineered full-stack solutions using React.js with Redux state management and custom hooks, integrated with Spring Boot RESTful services and PostgreSQL database, decreasing data loading times by 45% and improving system scalability</li>
                  <li>Developed microservices architecture using Spring Boot, Spring Cloud, and Hibernate ORM, reducing server costs by 30% while handling increased traffic loads efficiently</li>
                  <li>Implemented real-time WebSocket connections between React frontend and Spring Boot backend, enabling live data updates and improving user engagement by 25%</li>
                  <li>Optimized application performance through React.memo, lazy loading, and Spring Boot Redis caching, achieving 40% improvement in Core Web Vitals scores</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">May 2020 - July 2020</div>
              <div className="timeline-content">
                <h3>Indian Servers</h3>
                <h4>Machine Learning Intern</h4>
                <p>Vijayawada, India</p>
                <ul>
                  <li>Developed sentiment analysis system classifying Amazon product reviews into positive, negative, and neutral categories using Python, TensorFlow, and scikit-learn</li>
                  <li>Created data visualization dashboard to display sentiment insights and processed datasets using Pandas and SQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A showcase of my technical projects and contributions</p>
          
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="View Code">
                        <FaGithub className="link-icon" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                        <FaExternalLinkAlt className="link-icon" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Python</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">React JS</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">SASS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">GraphQL</span>
                <span className="skill-tag">Microservices</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Database Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">SQL Server</span>
                <span className="skill-tag">Redis</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud & Emerging Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">GCP</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Swagger</span>
                <span className="skill-tag">Power BI</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI/ML</h3>
              <div className="skill-tags">
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">scikit-learn</span>
                <span className="skill-tag">Gemini API</span>
                <span className="skill-tag">Generative AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-item">
              <h3>Binghamton University</h3>
              <h4>Master of Science in Computer Science</h4>
              <p>GPA: 3.64 | Expected Dec 2025</p>
              <p>Binghamton, NY</p>
              <p className="education-courses">Relevant Courses: Design Analysis and Algorithms, Distributed Systems, Cloud Computing, Machine Learning, Design Patterns</p>
            </div>
            <div className="education-item">
              <h3>NRI Institute of Technology</h3>
              <h4>Bachelor of Engineering in Electronics and Communication Engineering</h4>
              <p>GPA: 3.5</p>
              <p>Vijayawada, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Icons */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>NewYork</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>607-349-1491</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:gnadella2000@gmail.com">gnadella2000@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-details">
                  <h3>LinkedIn</h3>
                  <a href="https://linkedin.com/in/nadella-gouthami" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/nadella-gouthami
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <div className="contact-details">
                  <h3>GitHub</h3>
                  <a href="https://github.com/GouthamiNadella" target="_blank" rel="noopener noreferrer">
                    github.com/GouthamiNadella
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send Me a Message</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-secondary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Gouthami Nadella. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;