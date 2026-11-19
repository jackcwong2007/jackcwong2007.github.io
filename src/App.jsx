import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import heroImage from './assets/hero.png'
import ResumePage from './ResumePage.jsx'

function Home({ experience, projects }) {
  const [activeSection, setActiveSection] = useState('home')
  const resumeUrl = `${import.meta.env.BASE_URL}Jack_Wong_Resume.pdf`

  useEffect(() => {
    const sections = ['home', 'experience', 'projects']
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )

    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#home"
            className="brand-mark"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
          >
            <span>Jack Wong</span>
          </a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('home')}
                  className={activeSection === 'home' ? 'nav-item active' : 'nav-item'}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('experience')}
                  className={activeSection === 'experience' ? 'nav-item active' : 'nav-item'}
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className={activeSection === 'projects' ? 'nav-item active' : 'nav-item'}
                >
                  Projects
                </button>
              </li>
              <li>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-item"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Jack Wong</h1>
              <p className="hero-lead">
                Software Developer @ Ross Video | Computer Systems Engineering student @ Carleton | Vice President Services @ SCESoc
              </p>
              <div className="hero-actions">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Open resume
                </a>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => scrollToSection('projects')}
                >
                  Browse projects
                </button>
              </div>
            </div>

            <figure className="hero-media">
              <div className="hero-frame">
                <img
                  src={heroImage}
                  alt="Carleton University, Ottawa"
                />
              </div>
              <figcaption className="hero-caption">
                Carleton University, Ottawa
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section-band" id="experience">
          <div className="container split-section">
            <div className="section-rail">
              <h2>Experience</h2>
              <div className="red-rule" aria-hidden="true" />
            </div>

            <div className="experience-list">
              {experience.map((job, index) => (
                <article className="experience-entry" key={index}>
                  <div className="entry-top">
                    <div>
                      <h3>{job.title}</h3>
                      <p className="entry-org">{job.company}</p>
                    </div>
                    <span className="entry-period">{job.period}</span>
                  </div>
                  <p className="entry-description">{job.description}</p>
                  <ul className="tag-list" aria-label="Skills used">
                    {job.skills.map((skill, idx) => (
                      <li key={idx} className="tag">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band" id="projects">
          <div className="container split-section">
            <div className="section-rail">
              <h2>Projects</h2>
              <div className="red-rule" aria-hidden="true" />
              <p className="section-summary">
                What I do in my free time :)
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project-panel" key={index}>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                  <div className="project-foot">
                    <ul className="tag-list" aria-label="Technologies used">
                      {project.technologies.map((tech, idx) => (
                        <li key={idx} className="tag">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      View on GitHub
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-name">Jack Wong</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/jack-wong-29028b329/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jackcwong2007"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:jackcwong2007@gmail.com">
              jackcwong2007@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  const experience = [
    {
      title: 'Mechatronics Research Assistant',
      company: 'Advanced Biomechatronics and Locomotion Lab',
      period: 'Starting Jan 2027',
      description: 'Part of ICAAV core group to develop autonomous vehicles.',
      skills: ['C/C++', 'ROS2', "Java", "Python"]
    },
    {
      title: 'Software Developer Co-Op - Full Stack',
      company: 'Ross Video',
      period: 'Sept 2026 - Present',
      description: 'Building diagnostic tools for virtual production switchers & setting up automated build servers to free up laptops.',
      skills: ['C/C++', 'React', "Java"]
    },
    {
      title: 'Software Developer',
      company: 'Carleton Planetary Robotics Team',
      period: 'Sept 2025 - Dec 2026',
      description:
        'Maximizing rover system performance and network visibility by building low-overhead Node.js monitoring services, tuning PID control loops, and optimizing path-planning algorithm decay values to cut CPU latency.',
      skills: ['React', 'JavaScript', 'CSS', 'UI/UX', 'C/C++']
    },
    {
      title: 'Vice President Services',
      company: 'Systems and Computer Engineering Society (SCESoc)',
      period: 'April 2026 - Present',
      description:
        "Managing the society's office, 30+ volunteers, and 6 directors while working with the executive team to represent and advocate for students in the SCE department.",
      skills: ['Leadership', 'Communication']
    },
    {
      title: 'Software & Outreach Member',
      company: 'Spark Youth Robotics Club (FRC 8729)',
      period: 'Sept 2022 - Aug 2025',
      description:
        'Programmed multi-mechanism competition robots in Java using the WPILib framework across eight FIRST Robotics events while driving local community outreach through hands-on electronics and Arduino workshops.',
      skills: ['WPILib', 'CSS', 'Java']
    },
    {
      title: 'Teaching Assistant',
      company: 'Bell High School',
      period: 'Jan 2025 - June 2025',
      description:
        'Mentored thirty computer science students by delivering focused technical lectures on programming logic and producing targeted educational videos that contributed to a 5% average grade improvement.',
      skills: ['C', 'Public Speaking', 'Collaboration', 'Mentorship']
    }
  ]

  const projects = [
    {
      title: 'Wii Cursor Emulator',
      description:
        'Wii Remote-style pointer that streams a phone’s gyroscope and orientation at 60 Hz over the local network and maps that motion onto an on-screen desktop cursor.',
      technologies: ['Node.js', 'Javascript', 'Electron', 'Deviceorientation / DeviceMotion API'],
      link: 'https://github.com/jackcwong2007/wii'
    },
    {
      title: 'WordRot',
      description:
        'Browser-based JavaScript game inspired by Word Bomb on jklm.fun, but with a twist. Made for Stupid Ideas Hackathon 2026.',
      technologies: ['Javascript', 'HTML', 'CSS'],
      link: 'https://github.com/jackcwong2007/word-bomb'
    },
    {
      title: 'Facebook Scraper',
      description:
        'A Facebook group scraper bot built with Selenium and discord.py using randomized polling intervals to monitor posts and send real-time keyword alerts to Discord.',
      technologies: ['Python', 'Selenium', 'Automation', 'API'],
      link: 'https://github.com/jackcwong2007/Facebook-Scraper'
    },
    {
      title: 'Paragon',
      description:
        'An educational game developed in Python using Pygame focused on clean object-oriented architecture, structured game state management, and disciplined version control.',
      technologies: ['Python', 'Pygame', 'OOP', 'GitHub', 'Git'],
      link: 'https://github.com/jackcwong2007/Paragon-'
    },
    {
      title: 'Fashion Prediction Model',
      description:
        'A deep learning classifier built and trained in Python with TensorFlow and Keras to categorize clothing images from the Fashion-MNIST dataset.',
      technologies: ['Python', 'TensorFlow', 'Keras'],
      link: 'https://github.com/jackcwong2007/Fashion-Prediction-Model'
    },
    {
      title: 'Gaze Tracking',
      description:
        'Computer vision experiment tracking eye gaze direction using OpenCV and machine learning models. Work in progress.',
      technologies: ['Python', 'OpenCV', 'ML', 'Computer Vision'],
      link: 'https://github.com/jackcwong2007/Facial-Recognition'
    }
  ]

  return (
    <Routes>
      <Route
        path="/"
        element={<Home experience={experience} projects={projects} />}
      />
      <Route path="/view-pdf" element={<ResumePage />} />
    </Routes>
  )
}

export default App
