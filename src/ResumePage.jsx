import { Link } from 'react-router-dom'
import './App.css'

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="container">
        <h1>Resume</h1>
        <div className="resume-frame">
          <iframe
            src={`${import.meta.env.BASE_URL}Jack_Wong_Resume.pdf`}
            title="Jack Wong Resume"
            className="resume-iframe"
          />
        </div>
        <Link to="/" className="btn btn-secondary">
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
