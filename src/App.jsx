import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import ResumePage from './ResumePage.jsx'

function Home({ experience, projects, onViewResume }) {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Jack Wong</h2>
          <ul className="nav-links">
            <li>
              <button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>
                Home
              </button>
            </li>
            <li>
              <a href={`${import.meta.env.BASE_URL}Jack_Wong_Resume.pdf`} target="_blank" rel="noopener noreferrer">
                <button className={activeSection === 'resume' ? 'active' : ''}>
                  Resume
                </button>
              </a>
            </li>
            <li>
              <button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>
                Experience
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>
                Projects
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-content">
          <h1>Jack Wong</h1>
          <p className="tagline">Developer • Student • Problem Solver</p>
          <p className="bio">Dev @ CPRT | Computer Systems Engineering @ Carleton University</p>
          <div className="cta-buttons">
            <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <a href={`${import.meta.env.BASE_URL}Jack_Wong_Resume.pdf`} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-secondary">
                View Resume
                </button>
            </a>

          </div>
        </div>
      </header>

      <section className="experience-section" id="experience">
        <div className="container">
          <h2>Experience</h2>
          <p className="section-subtitle">My professional journey and accomplishments</p>
          <div className="experience-timeline">
            {experience.map((job, index) => (
              <div className="experience-card" key={index}>
                <div className="timeline-marker"></div>
                <div className="job-content">
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <span className="period">{job.period}</span>
                  </div>
                  <p className="company">{job.company}</p>
                  <p className="description">{job.description}</p>
                  <div className="skills-list">
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="container">
          <h2>Personal Projects</h2>
          <p className="section-subtitle">Cool things I've done</p>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="btn btn-secondary">View Project</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>Jack Wong</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/jack-wong-29028b329/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/jackcwong2007" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:jackcwong2007@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  const navigate = useNavigate()

  const experience = [
    {
      title: 'Software Developer',
      company: 'Carleton Planetary Robotics Team',
      period: 'Sept 2025 - Present',
      description: 'I focus on maximizing rover system performance and network visibility by building low-overhead Node.js monitoring services, tuning PID control loops, and optimizing path-planning algorithm decay values to cut CPU latency.',
      skills: ['React', 'JavaScript', 'CSS', 'UI/UX']
    },
    {
      title: 'Software & Outreach Member',
      company: 'Spark Youth Robotics Club (FRC 8729) ',
      period: 'Sept 2022 - Aug 2025',
      description: 'I programmed multi-mechanism competition robots in Java using the WPILib framework across eight FIRST Robotics events while driving local community outreach through hands-on electronics and Arduino workshops.',
      skills: ['React', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Teaching Assistant',
      company: 'Bell High School',
      period: 'Jan 2025 - June 2025',
      description: 'I mentored thirty computer science students by delivering focused technical lectures on programming logic and producing targeted educational videos that directly contributed to a 5% average grade improvement.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    }
  ]

  const projects = [
    {
      title: 'Facebook Scraper',
      description: 'A Facebook group scraper bot built with Selenium and discord.py that utilizes randomized polling intervals to efficiently monitor social media content and send automated, real-time keyword alerts to Discord.',
      technologies: ['Python', 'Selenium', 'Automation', 'API'],
      link: 'https://github.com/jackcwong2007/Facebook-Scraper'
    },
    {
      title: 'Paragon',
      description: 'An educational game developed in Python using Pygame to apply object-oriented programming, organized file structures, and version control while managing project goals independently.',
      technologies: ['Python', 'Pygame', 'OOP', 'Github', 'Git'],
      link: 'https://github.com/jackcwong2007/Paragon-'
    },
    {
      title: 'Fashion Prediction Model',
      description: 'A deep learning model built and trained in Python using TensorFlow and Keras to accurately categorize clothing images from the Fashion-MNIST dataset.',
      technologies: ['Python', 'TensorFlow', 'Keras'],
      link: 'https://github.com/jackcwong2007/Fashion-Prediction-Model'
    },
    {
      title: 'Facial Recognition Model',
      description: 'In progress...',
      technologies: ['Python', 'OpenCV', 'ML', 'Computer Vision'],
      link: 'https://github.com/jackcwong2007/Facial-Recognition'
    }
  ]

  const goToResume = () => navigate('/view-pdf')

  return (
    <Routes>
      <Route
        path="/"
        element={<Home experience={experience} projects={projects} onViewResume={goToResume} />}
      />
      <Route path="/view-pdf" element={<ResumePage />} />
    </Routes>
  )
}

export default App
