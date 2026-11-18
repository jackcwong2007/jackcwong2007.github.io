import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import './App.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`

export default function ResumePage() {
  const resumeUrl = `${import.meta.env.BASE_URL}Jack_Wong_Resume.pdf`
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand-mark">
            <span className="brand-square" aria-hidden="true" />
            <span>Jack Wong</span>
          </Link>
          <div className="resume-actions">
            <a href={resumeUrl} download="Jack_Wong_Resume.pdf" className="btn btn-primary">
              Download PDF
            </a>
            <Link to="/" className="btn btn-ghost">
              Back to home
            </Link>
          </div>
        </div>
      </header>

      <main className="resume-page">
        <div className="container">
          <div className="resume-page-head">
            <h1>Resume</h1>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-link">
              Open in new tab
            </a>
          </div>
          <div className="resume-frame resume-pdf-viewer">
            <Document
              file={resumeUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="resume-fallback">
                  <p>Loading resume PDF...</p>
                </div>
              }
              error={
                <div className="resume-fallback">
                  <p>Failed to load PDF document.</p>
                  <a href={resumeUrl} download="Jack_Wong_Resume.pdf" className="btn btn-primary">
                    Download Resume PDF
                  </a>
                </div>
              }
            >
              <Page pageNumber={pageNumber} renderTextLayer={true} renderAnnotationLayer={true} />
            </Document>
          </div>
        </div>
      </main>
    </div>
  )
}

