import React, { useState, useEffect } from 'react';
import './Home.css';
import profileImage from './assets/profile.png';
import unisysLogo from './assets/Unisys_logo.png';
import acmLogo from './assets/acm_logo.png';

// Project images
import mentalWellnessImg from './assets/Mental Youth Wellness.png';
import vocalCanvasImg from './assets/VocalCanvas.png';
import supportRAGImg from './assets/SupportRAG.png';
import aurisImg from './assets/Auris.png';
import swarAIDImg from './assets/SwarAID.png';
import mediCirclImg from './assets/Medicircl.png';

function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "skills", "about-me", "contacts"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const projectDetails = {
    "youth-wellness": {
      title: "Youth Mental Wellness Assistant",
      fullDescription: "A comprehensive AI-powered mental health platform that uses speech emotion recognition to detect stress and anxiety in real-time. Built with React.js frontend and FastAPI backend, utilizing Hugging Face's Wav2Vec2 model for audio analysis and Gemini API for empathetic multilingual responses.",
      features: [
        "Real-time speech emotion recognition using Wav2Vec2",
        "Multilingual support (English, Hindi, Kannada)",
        "AI-powered empathetic responses via Gemini API",
        "Privacy-focused: No data storage, complete anonymity",
        "Interactive voice analysis with emotional breakdown",
        "Resource library with mental health support",
        "Crisis helpline integration"
      ],
      techStack: ["React.js", "FastAPI", "Hugging Face Wav2Vec2", "Gemini API", "Python", "JavaScript", "Tailwind CSS", "Uvicorn"],
      github: "https://github.com/Sakshamyadav15/YouthMentalWellness",
      architecture: "Microservices architecture with separate frontend and backend deployment, utilizing WebRTC for audio capture and FFmpeg for audio processing"
    },
    "vocalcanvas": {
      title: "VocalCanvas",
      fullDescription: "A voice-first platform designed for artisans and craftspeople to easily create their digital presence. Features AI-powered content generation for bios, captions, and SEO-optimized hashtags with multilingual voice input support.",
      features: [
        "Voice-based artisan registration and profile creation",
        "AI-powered bio and caption generation using Gemini",
        "Multilingual speech-to-text (EN/HIN/KAN)",
        "SEO-optimized hashtag suggestions",
        "Exhibition carousel for showcasing artwork",
        "Firebase Authentication for secure access",
        "Firestore real-time database for data management",
        "Responsive Flutter UI for cross-platform support"
      ],
      techStack: ["Flutter", "Firebase", "Firestore", "Gemini API", "Speech-to-Text", "Dart", "Cloud Functions"],
      liveDemo: "https://vocal-canvas.vercel.app/",
      github: "https://github.com/Sakshamyadav15/VocalCanvas",
      architecture: "Serverless architecture with Firebase backend and Flutter frontend, leveraging Cloud Functions for AI processing"
    },
    "supportrag": {
      title: "SupportRAG - Ticket Deflection Platform",
      fullDescription: "An advanced Retrieval-Augmented Generation (RAG) system built for customer support automation. Features dual vector stores processing 15,580 FAQs and historical tickets with sub-250ms response latency using FAISS IVF indexing and async request handling.",
      features: [
        "Dual vector store architecture (10,580 FAQs + 5,000 tickets)",
        "FAISS IVF indexing for 3-10x faster retrieval",
        "Smart fallback logic (FAQ → Ticket at 65% threshold)",
        "Async parallel queries with 4.2x throughput improvement",
        "Sub-250ms average response latency",
        "Semantic search over knowledge base",
        "Real-time metrics and logging",
        "Production-ready FastAPI endpoints",
        "Streamlit frontend with dual store tracking"
      ],
      techStack: ["Python", "LangChain", "FAISS", "FastAPI", "Gemini 2.0 Flash", "Docker", "Streamlit", "sentence-transformers"],
      github: "https://github.com/Sakshamyadav15/SupportRAG",
      metrics: "15,580 documents indexed, 337ms parallel latency, 2.96 queries/sec throughput",
      architecture: "Microservices with async FastAPI, FAISS vector stores, LangChain orchestration, and Gemini LLM for natural language generation"
    },
    "auris": {
      title: "Auris (Whisper Walls)",
      fullDescription: "A location-based anonymous note-sharing platform that allows users to leave and discover messages tied to specific geographic locations. Features emotion tagging and real-time engagement with geolocation-based discovery.",
      features: [
        "Location-based note discovery using OpenStreetMap",
        "Anonymous posting with emotion tags",
        "Real-time geolocation integration",
        "Interactive map interface",
        "Note proximity alerts",
        "MongoDB for scalable data storage",
        "Node.js backend for API management"
      ],
      techStack: ["React Native", "Node.js", "MongoDB", "OpenStreetMap", "Express", "Geolocation API"],
      github: "https://github.com/Sakshamyadav15/Whisper-Walls",
      download: "https://github.com/Sagar-S-R/Whisper-Walls/releases/download/v1.0.1/app-release.apk",
      architecture: "RESTful API with MongoDB Atlas, React Native mobile app, and OpenStreetMap integration for geospatial queries"
    },
    "swaraid": {
      title: "SwarAID",
      fullDescription: "An AI-powered healthcare solution focused on improving accessibility and diagnosis support through intelligent voice interfaces and medical data analysis.",
      features: [
        "Voice-enabled medical consultation",
        "AI-powered symptom analysis",
        "Healthcare resource recommendations",
        "Multi-language support for accessibility"
      ],
      techStack: ["React", "Node.js", "AI/ML APIs", "Speech Recognition"],
      github: "https://github.com/Sakshamyadav15/SwarAID",
      architecture: "Full-stack web application with AI integration for medical assistance"
    },
    "medicircl": {
      title: "MediCircl",
      fullDescription: "A comprehensive healthcare platform connecting patients with medical services, featuring appointment scheduling, health records management, and telemedicine capabilities built with Flutter.",
      features: [
        "Patient-doctor appointment scheduling",
        "Electronic health records (EHR) management",
        "Telemedicine consultation support",
        "Prescription management",
        "Real-time Firebase integration",
        "Secure authentication with Firebase Auth",
        "Cloud-based data storage with Firestore"
      ],
      techStack: ["Flutter", "Firebase", "Firestore", "Firebase Auth", "Dart"],
      github: "https://github.com/Sakshamyadav15/MediCircl",
      architecture: "Flutter mobile application with Firebase backend for authentication and Firestore for real-time data management"
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation Header */}
      <header className="portfolio-header">
        <div className="content-wrapper">
          <div className="header-content">
            <button 
              onClick={() => scrollToSection("home")}
              className="logo-button"
            >
              <span className="header-name">Saksham Yadav</span>
            </button>

            <nav className="nav-menu">
              <button
                onClick={() => scrollToSection("home")}
                className={`nav-link ${activeSection === "home" ? "active" : ""}`}
              >
                <span className="nav-hash">#</span>home
              </button>
              
              <button
                onClick={() => scrollToSection("experience")}
                className={`nav-link ${activeSection === "experience" ? "active" : ""}`}
              >
                <span className="nav-hash">#</span>experience
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
              >
                <span className="nav-hash">#</span>projects
              </button>

              <button
                onClick={() => scrollToSection("skills")}
                className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
              >
                <span className="nav-hash">#</span>skills
              </button>

              <button
                onClick={() => scrollToSection("about-me")}
                className={`nav-link ${activeSection === "about-me" ? "active" : ""}`}
              >
                <span className="nav-hash">#</span>about-me
              </button>

              <button
                onClick={() => scrollToSection("contacts")}
                className={`nav-link ${activeSection === "contacts" ? "active" : ""}`}
              >
                <span className="nav-hash">#</span>contacts
              </button>

              <div className="nav-divider" />

              <a 
                href="https://www.linkedin.com/in/saksham-yadav-002569217/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-social-link"
                title="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor"/>
                </svg>
              </a>

              <a 
                href="https://github.com/Sakshamyadav15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-social-link"
                title="GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="currentColor"/>
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="decorative-background">
        <div className="dots-grid dots-grid-1" />
        <div className="dots-grid dots-grid-2" />
        <div className="border-box border-box-1" />
        <div className="border-box border-box-2" />
        <div className="border-box border-box-3" />
      </div>

      <section className="hero-section" id="home">
        <div className="content-wrapper">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="title-normal">Saksham is a </span>
                <span className="title-accent">full-stack developer </span>
                <span className="title-normal">and </span>
                <span className="title-accent">AI/ML enthusiast</span>
              </h1>
              <p className="hero-description">
                I build scalable web applications and AI-powered solutions that solve real-world problems
              </p>
              <a href="#contacts" className="btn-primary">Contact me!!</a>
            </div>
            <div className="hero-image-wrapper">
              <div className="logo-outline">
                <div className="logo-part logo-part-left">
                  <div className="logo-square" style={{ left: "45px", top: "0px" }} />
                  <div className="logo-square" style={{ left: "0px", top: "0px" }} />
                  <div className="logo-square" style={{ left: "0px", top: "45px" }} />
                  <div className="logo-square" style={{ left: "0px", top: "90px" }} />
                  <div className="logo-square" style={{ left: "45px", top: "90px" }} />
                </div>
                <div className="logo-part logo-part-right">
                  <div className="logo-square" style={{ left: "0px", top: "0px" }} />
                  <div className="logo-square" style={{ left: "45px", top: "90px" }} />
                  <div className="logo-square" style={{ left: "45px", top: "45px" }} />
                  <div className="logo-square" style={{ left: "45px", top: "0px" }} />
                  <div className="logo-square" style={{ left: "0px", top: "90px" }} />
                </div>
              </div>
              <img
                src={profileImage}
                alt="Saksham Yadav"
                className="hero-image"
              />
              <div className="dots-grid hero-dots" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section" id="experience">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">experience</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-header">
                <div className="experience-icon">
                  <img src={unisysLogo} alt="Unisys" className="experience-logo" />
                </div>
                <div className="experience-title-group">
                  <h3 className="experience-title">Software Engineer Intern</h3>
                  <p className="experience-company">Unisys</p>
                </div>
              </div>
              <p className="experience-date">Sept 2025 – Oct 2025</p>
              <ul className="experience-list">
                <li>Engineered an <strong>Interactive Graph Caller Tool</strong> to visualize legacy program flows, improving maintainability and reducing architecture understanding time by <strong>30%</strong></li>
                <li>Implemented <strong>secure HTTPS communication</strong> using SSL certificates, deployed with FastAPI + Nginx on RHEL servers</li>
                <li>Utilized <strong>BitBucket for Version Control</strong>, collaborating with cross-functional teams</li>
                <li>Contributed to production deployments and CI workflows</li>
              </ul>
              <div className="experience-tags">
                <span className="tag">FastAPI</span>
                <span className="tag">Nginx</span>
                <span className="tag">RHEL</span>
                <span className="tag">SSL/TLS</span>
                <span className="tag">BitBucket</span>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <div className="experience-icon">
                  <img src={acmLogo} alt="ACM RIT" className="experience-logo" />
                </div>
                <div className="experience-title-group">
                  <h3 className="experience-title">Event Manager</h3>
                  <p className="experience-company">ACM RIT Student Chapter</p>
                </div>
              </div>
              <p className="experience-date">Nov 2024 – Present</p>
              <ul className="experience-list">
                <li>Organized and managed <strong>hackathons and coding events</strong> with <strong>150+ participants</strong></li>
                <li>Coordinated with <strong>ACM branches across Bengaluru</strong> to host multi-chapter tech events</li>
                <li>Led event logistics, sponsorship coordination, and participant engagement</li>
                <li>Facilitated technical workshops and mentorship sessions</li>
              </ul>
              <div className="experience-tags">
                <span className="tag">Event Management</span>
                <span className="tag">Leadership</span>
                <span className="tag">Coordination</span>
                <span className="tag">Public Speaking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">projects</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="projects-grid">
            {/* Youth Mental Wellness */}
            <div className="project-card" onClick={() => setSelectedProject("mental-wellness")}>
              <img src={mentalWellnessImg} alt="Youth Mental Wellness" className="project-image" />
              <div className="project-tags">
                <span className="tag">React.js</span>
                <span className="tag">FastAPI</span>
                <span className="tag">Wav2Vec2</span>
                <span className="tag">Gemini</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">Youth Mental Wellness Assistant</h3>
                <p className="project-description">Real-time stress detection via speech emotion recognition with multilingual support</p>
                <div className="project-buttons">
                  <a href="https://github.com/Sakshamyadav15/YouthMentalWellness" target="_blank" rel="noopener noreferrer" className="btn-primary btn-small" onClick={(e) => e.stopPropagation()}>GitHub &lt;~&gt;</a>
                  <button className="btn-secondary btn-small" onClick={(e) => { e.stopPropagation(); setSelectedProject("youth-wellness"); }}>Details</button>
                </div>
              </div>
            </div>

            {/* VocalCanvas */}
            <div className="project-card" onClick={() => setSelectedProject("vocalcanvas")}>
              <img src={vocalCanvasImg} alt="VocalCanvas" className="project-image" />
              <div className="project-tags">
                <span className="tag">Flutter</span>
                <span className="tag">Firebase</span>
                <span className="tag">Gemini</span>
                <span className="tag">AI</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">VocalCanvas</h3>
                <p className="project-description">Voice-first platform for artisans with AI-powered content generation</p>
                <div className="project-buttons">
                  <a href="https://vocal-canvas.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary btn-small" onClick={(e) => e.stopPropagation()}>Live &lt;~&gt;</a>
                  <button className="btn-secondary btn-small" onClick={(e) => { e.stopPropagation(); setSelectedProject("vocalcanvas"); }}>Details</button>
                </div>
              </div>
            </div>

            {/* SupportRAG */}
            <div className="project-card" onClick={() => setSelectedProject("supportrag")}>
              <img src={supportRAGImg} alt="SupportRAG" className="project-image" />
              <div className="project-tags">
                <span className="tag">LangChain</span>
                <span className="tag">FAISS</span>
                <span className="tag">FastAPI</span>
                <span className="tag">Docker</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">SupportRAG</h3>
                <p className="project-description">RAG pipeline with 15.5k+ docs, sub-250ms latency, 4.2x throughput</p>
                <div className="project-buttons">
                  <a href="https://github.com/Sakshamyadav15/SupportRAG" target="_blank" rel="noopener noreferrer" className="btn-primary btn-small" onClick={(e) => e.stopPropagation()}>GitHub &lt;~&gt;</a>
                  <button className="btn-secondary btn-small" onClick={(e) => { e.stopPropagation(); setSelectedProject("supportrag"); }}>Details</button>
                </div>
              </div>
            </div>

            {/* Auris */}
            <div className="project-card" onClick={() => setSelectedProject("auris")}>
              <img src={aurisImg} alt="Auris (Whisper Walls)" className="project-image" />
              <div className="project-tags">
                <span className="tag">React Native</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Maps</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">Auris (Whisper Walls)</h3>
                <p className="project-description">Location-based anonymous note-sharing with emotion tagging</p>
                <div className="project-buttons">
                  <a href="https://github.com/Sakshamyadav15/Whisper-Walls" target="_blank" rel="noopener noreferrer" className="btn-primary btn-small" onClick={(e) => e.stopPropagation()}>GitHub &lt;~&gt;</a>
                  <button className="btn-secondary btn-small" onClick={(e) => { e.stopPropagation(); setSelectedProject("auris"); }}>Details</button>
                </div>
              </div>
            </div>

            {/* SwarAID */}
            <div className="project-card" onClick={() => setSelectedProject("swaraid")}>
              <img src={swarAIDImg} alt="SwarAID" className="project-image" />
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">AI/ML</span>
                <span className="tag">Speech</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">SwarAID</h3>
                <p className="project-description">AI-powered healthcare solution with voice-enabled consultation</p>
                <div className="project-buttons">
                  <a href="https://github.com/Sakshamyadav15/SwarAID" target="_blank" rel="noopener noreferrer" className="btn-primary btn-small" onClick={(e) => e.stopPropagation()}>GitHub &lt;~&gt;</a>
                  <button className="btn-secondary btn-small" onClick={(e) => { e.stopPropagation(); setSelectedProject("swaraid"); }}>Details</button>
                </div>
              </div>
            </div>

            {/* MediCircl */}
            <div className="project-card" onClick={() => setSelectedProject("medicircl")}>
              <img src={mediCirclImg} alt="MediCircl" className="project-image" />
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">WebRTC</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">MediCircl</h3>
                <p className="project-description">Comprehensive healthcare platform with telemedicine and EHR management</p>
                <div className="project-buttons">
                  <a href="https://github.com/Sakshamyadav15/MediCircl" target="_blank" rel="noopener noreferrer" className="btn-primary btn-small" onClick={(e) => e.stopPropagation()}>GitHub &lt;~&gt;</a>
                  <button className="btn-secondary btn-small" onClick={(e) => { e.stopPropagation(); setSelectedProject("medicircl"); }}>Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            
            <h2 className="modal-title">{projectDetails[selectedProject].title}</h2>
            
            <p className="modal-description">{projectDetails[selectedProject].fullDescription}</p>
            
            <div className="modal-section">
              <h3 className="modal-section-title">Key Features</h3>
              <ul className="modal-features-list">
                {projectDetails[selectedProject].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="modal-section">
              <h3 className="modal-section-title">Tech Stack</h3>
              <div className="modal-tech-stack">
                {projectDetails[selectedProject].techStack.map((tech, index) => (
                  <span key={index} className="modal-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            {projectDetails[selectedProject].metrics && (
              <div className="modal-section">
                <h3 className="modal-section-title">Performance Metrics</h3>
                <p className="modal-metrics">{projectDetails[selectedProject].metrics}</p>
              </div>
            )}
            
            {projectDetails[selectedProject].architecture && (
              <div className="modal-section">
                <h3 className="modal-section-title">Architecture</h3>
                <p className="modal-architecture">{projectDetails[selectedProject].architecture}</p>
              </div>
            )}
            
            <div className="modal-buttons">
              {projectDetails[selectedProject].github && (
                <a href={projectDetails[selectedProject].github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  View on GitHub
                </a>
              )}
              {projectDetails[selectedProject].download && (
                <a href={projectDetails[selectedProject].download} target="_blank" rel="noopener noreferrer" className="btn-secondary" download>
                  Download APK
                </a>
              )}
              {projectDetails[selectedProject].liveDemo && (
                <a href={projectDetails[selectedProject].liveDemo} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="skills-section" id="skills">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">skills</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="skills-grid">
            <div className="skills-decorative">
              <div className="dots-grid skills-dots-1" />
              <div className="dots-grid skills-dots-2" />
              <div className="border-box skills-box-1" />
              <div className="border-box skills-box-2" />
              <div className="logo-large">
                <div className="logo-large-part logo-large-left">
                  <div className="logo-large-square" style={{ left: "0px", top: "0px" }} />
                  <div className="logo-large-square" style={{ left: "28px", top: "57px" }} />
                  <div className="logo-large-square" style={{ left: "28px", top: "28px" }} />
                  <div className="logo-large-square" style={{ left: "28px", top: "0px" }} />
                  <div className="logo-large-square" style={{ left: "0px", top: "57px" }} />
                </div>
                <div className="logo-large-part logo-large-right">
                  <div className="logo-large-square" style={{ left: "28px", top: "0px" }} />
                  <div className="logo-large-square" style={{ left: "0px", top: "0px" }} />
                  <div className="logo-large-square" style={{ left: "0px", top: "28px" }} />
                  <div className="logo-large-square" style={{ left: "0px", top: "57px" }} />
                  <div className="logo-large-square" style={{ left: "28px", top: "57px" }} />
                </div>
              </div>
            </div>

            <div className="skills-blocks">
              <div className="skill-block">
                <div className="skill-header">Languages</div>
                <div className="skill-divider" />
                <ul className="skill-bullet-list">
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>C/C++</li>
                  <li>Dart</li>
                  <li>R</li>
                </ul>
              </div>

              <div className="skill-block">
                <div className="skill-header">Databases</div>
                <div className="skill-divider" />
                <ul className="skill-bullet-list">
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Firestore</li>
                  <li>Neo4j</li>
                </ul>
              </div>

              <div className="skill-block">
                <div className="skill-header">Frameworks</div>
                <div className="skill-divider" />
                <ul className="skill-bullet-list">
                  <li>React.js</li>
                  <li>React Native</li>
                  <li>Flutter</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>FastAPI</li>
                  <li>Django</li>
                </ul>
              </div>

              <div className="skill-block">
                <div className="skill-header">Cloud & AI</div>
                <div className="skill-divider" />
                <ul className="skill-bullet-list">
                  <li>GCP</li>
                  <li>Vertex AI</li>
                  <li>Gemini API</li>
                  <li>Hugging Face</li>
                  <li>LangChain</li>
                  <li>FAISS</li>
                  <li>RAG</li>
                </ul>
              </div>

              <div className="skill-block">
                <div className="skill-header">Tools & DevOps</div>
                <div className="skill-divider" />
                <ul className="skill-bullet-list">
                  <li>Docker</li>
                  <li>Nginx</li>
                  <li>Git/GitHub</li>
                  <li>BitBucket</li>
                  <li>Firebase</li>
                  <li>VS Code</li>
                </ul>
              </div>

              <div className="skill-block">
                <div className="skill-header">Technical Concepts</div>
                <div className="skill-divider" />
                <ul className="skill-bullet-list">
                  <li>OS & System Design</li>
                  <li>OOPS</li>
                  <li>Computer Networks</li>
                  <li>Problem Solving</li>
                  <li>Software Engineering</li>
                  <li>IoT</li>
                  <li>Database Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">about-me</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                Hello, I'm Saksham Yadav! I'm a Computer Science student at MS Ramaiah Institute of Technology 
                with a strong passion for building scalable applications and AI-powered solutions.
              </p>
              <p className="about-text">
                As a Software Engineer Intern at Unisys, I engineered tools that improved system maintainability 
                by 30% and deployed secure solutions using FastAPI, Nginx, and RHEL servers. I'm also an 
                Event Manager at ACM RIT, organizing hackathons and coding events for 150+ participants.
              </p>
              <p className="about-text">
                My expertise spans full-stack development, machine learning, and cloud technologies. I love 
                working with React, Flutter, FastAPI, and AI frameworks like LangChain and Hugging Face. 
                I've built projects ranging from mental wellness assistants to RAG-based support systems.
              </p>
              
              <div className="achievements-grid">
                <div className="achievement-card">
                  <div className="achievement-rank">2nd</div>
                  <div className="achievement-details">
                    <div className="achievement-label">Runner-Up</div>
                    <div className="achievement-event">Unisys Innovation Program (UIP Y16) 2025</div>
                  </div>
                </div>
                
                <div className="achievement-card">
                  <div className="achievement-rank">Top 2</div>
                  <div className="achievement-details">
                    <div className="achievement-label">College Teams</div>
                    <div className="achievement-event">Smart India Hackathon 2024</div>
                  </div>
                </div>
                
                <div className="achievement-card">
                  <div className="achievement-rank">9.27</div>
                  <div className="achievement-details">
                    <div className="achievement-label">GPA / 10</div>
                    <div className="achievement-event">Academic Excellence • 97.6% in 12th</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image-wrapper">
              <img
                src={profileImage}
                alt="Saksham Yadav working"
                className="about-image"
              />
              <div className="dots-grid about-dots-1" />
              <div className="dots-grid about-dots-2" />
              <div className="about-line" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contacts">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">contacts</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="contact-grid">
            <p className="contact-description">
              I'm interested in internship and full-time opportunities in software development and AI/ML. 
              Feel free to reach out if you have any questions or want to collaborate!
            </p>
            <div className="contact-box">
              <h3 className="contact-box-title">Connect with me</h3>
              <div className="contact-links">
                <a href="mailto:saksham.jadav@gmail.com" className="contact-link">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M5.07187 9.20292C5.2168 8.57709 5.57307 8.01832 6.08232 7.6181C6.59158 7.21789 7.22365 6.99996 7.875 7H25.125C25.7764 6.99996 26.4084 7.21789 26.9177 7.6181C27.4269 8.01832 27.7832 8.57709 27.9281 9.20292L16.5 16.0865L5.07187 9.20292ZM5 10.8207V20.8847L13.3418 15.8442L5 10.8207ZM14.7189 16.6758L5.27456 22.3807C5.50791 22.8657 5.87619 23.2753 6.33656 23.5619C6.79693 23.8486 7.33044 24.0005 7.875 24H25.125C25.6695 24.0001 26.2028 23.8479 26.6629 23.561C27.123 23.274 27.491 22.8643 27.724 22.3793L18.2796 16.6744L16.5 17.7468L14.7189 16.6744V16.6758ZM19.6582 15.8457L28 20.8847V10.8207L19.6582 15.8442V15.8457Z" fill="#ABB2BF"/>
                  </svg>
                  <span>saksham.jadav@gmail.com</span>
                </a>
                <a href="tel:+917678369133" className="contact-link">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M22.8889 18.9111C22.4889 18.7111 20.6222 17.8222 20.2667 17.7111C19.9111 17.6 19.6444 17.5556 19.3778 17.9556C19.1111 18.3556 18.4444 19.1111 18.2222 19.3778C18 19.6444 17.7778 19.6889 17.3778 19.4889C16.9778 19.2889 15.6444 18.8444 14.0667 17.4222C12.8444 16.3111 12.0444 14.9556 11.8222 14.5556C11.6 14.1556 11.8 13.9111 12 13.7111C12.1778 13.5333 12.4 13.2444 12.6 13.0222C12.8 12.8 12.8667 12.6222 12.9778 12.3556C13.0889 12.0889 13.0333 11.8667 12.9333 11.6667C12.8333 11.4667 12.0444 9.6 11.7333 8.8C11.4333 8.02222 11.1222 8.13333 10.8778 8.12222H10.1333C9.86667 8.12222 9.46667 8.22222 9.11111 8.62222C8.75556 9.02222 7.82222 9.91111 7.82222 11.7778C7.82222 13.6444 9.15556 15.4667 9.35556 15.7333C9.55556 16 12.0444 19.8667 15.8667 21.4667C16.7333 21.8444 17.4111 22.0667 17.9333 22.2333C18.8 22.5111 19.5889 22.4667 20.2222 22.3667C20.9333 22.2556 22.4444 21.5111 22.7556 20.6889C23.0667 19.8667 23.0667 19.1778 22.9667 19.0222C22.8667 18.8667 22.6 18.7667 22.2 18.5667L22.8889 18.9111ZM16 29C8.26667 29 2 22.7333 2 15C2 7.26667 8.26667 1 16 1C23.7333 1 30 7.26667 30 15C30 22.7333 23.7333 29 16 29ZM16 3C9.37333 3 4 8.37333 4 15C4 21.6267 9.37333 27 16 27C22.6267 27 28 21.6267 28 15C28 8.37333 22.6267 3 16 3Z" fill="#ABB2BF"/>
                  </svg>
                  <span>+91-7678369133</span>
                </a>
                <a href="https://www.linkedin.com/in/saksham-yadav-7aa241293/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M26.2222 3H5.77778C4.24444 3 3 4.24444 3 5.77778V26.2222C3 27.7556 4.24444 29 5.77778 29H26.2222C27.7556 29 29 27.7556 29 26.2222V5.77778C29 4.24444 27.7556 3 26.2222 3ZM11.6667 24.5556H8.11111V13.4444H11.6667V24.5556ZM9.88889 12.0889C8.78889 12.0889 7.88889 11.1889 7.88889 10.0889C7.88889 8.98889 8.78889 8.08889 9.88889 8.08889C10.9889 8.08889 11.8889 8.98889 11.8889 10.0889C11.8889 11.1889 10.9889 12.0889 9.88889 12.0889ZM24.5556 24.5556H21V18.6667C21 17.3111 21 15.5556 19.1111 15.5556C17.2222 15.5556 16.8889 17.0222 16.8889 18.5556V24.5556H13.3333V13.4444H16.7778V15.0667H16.8222C17.3111 14.1333 18.5556 13.1111 20.3333 13.1111C23.9333 13.1111 24.5556 15.4444 24.5556 18.4444V24.5556Z" fill="#ABB2BF"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">send-me-a-message</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="contact-form-container">
            <div className="contact-form-intro">
              <p className="contact-form-description">
                Have a project in mind or want to collaborate? Drop me a message and I'll get back to you as soon as possible!
              </p>
            </div>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    placeholder="Your name"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="your.email@example.com"
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="form-input" 
                  placeholder="What's this about?"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-textarea" 
                  placeholder="Your message here..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-divider" />
        <div className="content-wrapper">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-brand">
                <div className="footer-logo">
                  <div className="logo-small-square" />
                  <div className="logo-small-square" />
                  <div className="logo-small-square" />
                  <div className="logo-small-square" />
                  <div className="logo-small-square" />
                </div>
                <span className="footer-name">Saksham</span>
                <span className="footer-email">saksham.jadav@gmail.com</span>
              </div>
              <p className="footer-tagline">Full-stack developer and AI/ML enthusiast</p>
            </div>
            <div className="footer-media">
              <h4 className="footer-media-title">Connect</h4>
              <div className="social-icons">
                <a href="https://github.com/Sakshamyadav15" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z" fill="#ABB2BF"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/saksham-yadav-7aa241293/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M26.2222 3H5.77778C4.24444 3 3 4.24444 3 5.77778V26.2222C3 27.7556 4.24444 29 5.77778 29H26.2222C27.7556 29 29 27.7556 29 26.2222V5.77778C29 4.24444 27.7556 3 26.2222 3ZM11.6667 24.5556H8.11111V13.4444H11.6667V24.5556ZM9.88889 12.0889C8.78889 12.0889 7.88889 11.1889 7.88889 10.0889C7.88889 8.98889 8.78889 8.08889 9.88889 8.08889C10.9889 8.08889 11.8889 8.98889 11.8889 10.0889C11.8889 11.1889 10.9889 12.0889 9.88889 12.0889ZM24.5556 24.5556H21V18.6667C21 17.3111 21 15.5556 19.1111 15.5556C17.2222 15.5556 16.8889 17.0222 16.8889 18.5556V24.5556H13.3333V13.4444H16.7778V15.0667H16.8222C17.3111 14.1333 18.5556 13.1111 20.3333 13.1111C23.9333 13.1111 24.5556 15.4444 24.5556 18.4444V24.5556Z" fill="#ABB2BF"/>
                  </svg>
                </a>
                <a href="https://leetcode.com/u/Sakshamyadav15/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M21.469 23.907L21.447 23.929C21.085 24.274 20.654 24.464 20.196 24.464C19.738 24.464 19.307 24.274 18.945 23.929L13.653 18.856C13.291 18.511 13.084 18.055 13.084 17.571C13.084 17.087 13.291 16.631 13.653 16.286L18.945 11.213C19.307 10.868 19.738 10.678 20.196 10.678C20.654 10.678 21.085 10.868 21.447 11.213L21.469 11.235C21.831 11.58 22.038 12.036 22.038 12.52C22.038 13.004 21.831 13.46 21.469 13.805L17.9 17.571L21.469 21.337C21.831 21.682 22.038 22.138 22.038 22.622C22.038 23.106 21.831 23.562 21.469 23.907Z" fill="#ABB2BF"/>
                    <path d="M11 18.571H20V16.571H11V18.571Z" fill="#ABB2BF"/>
                  </svg>
                </a>
                <a href="https://www.hackerrank.com/profile/saksham_jadav" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="HackerRank">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M24.5 7.5H7.5C6.67157 7.5 6 8.17157 6 9V23C6 23.8284 6.67157 24.5 7.5 24.5H24.5C25.3284 24.5 26 23.8284 26 23V9C26 8.17157 25.3284 7.5 24.5 7.5Z" stroke="#ABB2BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    <path d="M14 12H18V20H14V12Z" fill="#ABB2BF"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="footer-copyright">© 2025 Saksham Yadav. Built with React & Vite</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
