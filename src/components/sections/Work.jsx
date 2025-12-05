import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const projects = [
  {
    id: 1,
    title: "Operations Holdings Inc",
    desc: "A React-based portfolio web application developed for Operations Holdings, a multimillion-dollar company. Built with Tailwind CSS for responsive, clean design and enhanced with advanced custom animations using Framer Motion.",
    images: [
      "/images/operations-holdings/OH_home.jpeg",
      "/images/operations-holdings/OH_companies.jpeg",
      "/images/operations-holdings/OH_companie_view.jpeg"
    ], 
    tools: ["React", "Tailwind CSS", "Framer Motion"],
    links: {
      site: "https://operationsholdings.com",
      repo: null
    }
  },
  {
    id: 2,
    title: "Bakery Inventory Manager",
    desc: "A full-stack web application enabling efficient management of raw materials, recipes, and finished baked goods. Features dynamic baking logic and robust server-side logging.",
    images: [
      "/images/mfbg/mfbg_home.jpeg",
      "/images/mfbg/mfbg_recipes.jpeg",
      "/images/mfbg/mfbg_ingredioents.jpeg",
      "/images/mfbg/mfbg_files.jpeg",
      "/images/mfbg/mfbg_tests.jpeg"
    ], 
    tools: ["React", "Node.js", "Express", "PostgreSQL"],
    links: {
      site: "https://bakery-inventory-manager-frontend.onrender.com/",
      repo: "https://github.com/jkfaris94/bakery-inventory-manager"
    }
  },
  {
    id: 3,
    title: "WeLoveMovies",
    desc: "A RESTful API powering a movie database. Supports browsing movies, theaters, and reviews with full CRUD operations and robust error handling.",
    images: ["/images/welovemovies.png"], 
    tools: ["Node.js", "Express", "Knex", "PostgreSQL"],
    links: {
      site: null,
      repo: "https://github.com/jkfaris94/WeLoveMovies-back-end"
    }
  },
  {
    id: 4,
    title: "Flashcard-O-Matic",
    desc: "A React app for creating, editing, and studying custom flashcard decks. Features full CRUD functionality and React Router navigation.",
    images: ["/images/flashcard.png"], 
    tools: ["React", "Bootstrap", "HTML/CSS"],
    links: {
      site: null,
      repo: "https://github.com/jkfaris94/Flashcard-O-Matic"
    }
  },
  {
    id: 5,
    title: "Champion Lifestyle",
    desc: "A fully deployed WordPress application featuring an SEO-optimized blog, responsive design, and integrated lead-generation features.",
    images: ["/images/pic02.jpg"], 
    tools: ["WordPress", "SEO", "CSS"],
    links: {
      site: "https://championlifestyle.fit",
      repo: null
    }
  }
]

export default function Work({ isActive, isVisible, onClose }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = (e) => {
    e.stopPropagation()
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <article 
      id="work" 
      className={`${isActive ? 'active' : ''}`} 
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <h2 className="major">Work</h2>
      
      {/* Grid Layout for Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((project) => (
          <div key={project.id} style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            padding: '1.5rem', 
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div 
              className="image main" 
              style={{ marginBottom: '1rem', cursor: 'pointer', overflow: 'hidden', borderRadius: '4px' }} 
              onClick={() => openModal(project)}
            >
              <img 
                src={project.images[0]} 
                alt={project.title} 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover', 
                  transition: 'transform 0.3s ease' 
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{project.title}</h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {project.tools.map((tool, index) => (
                <span key={index} style={{ 
                  fontSize: '0.7rem', 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  whiteSpace: 'nowrap'
                }}>
                  {tool}
                </span>
              ))}
            </div>

            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>{project.desc}</p>
            
            <ul className="actions" style={{ marginBottom: 0 }}>
              {project.links.site && <li><a href={project.links.site} target="_blank" rel="noopener noreferrer" className="button small">Live Demo</a></li>}
              {project.links.repo && <li><a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="button small icon fa-github">GitHub</a></li>}
            </ul>
          </div>
        ))}
      </div>

      {/* Modal / Carousel */}
      {mounted && selectedProject && createPortal(
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.9)',
          zIndex: 10000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }} onClick={closeModal}>
          
          <div 
            style={{ position: 'relative', maxWidth: '1000px', width: '100%', textAlign: 'center' }} 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedProject.images[currentImageIndex]} 
              alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`} 
              style={{ maxHeight: '70vh', maxWidth: '100%', borderRadius: '4px', marginBottom: '1rem', boxShadow: '0 0 20px rgba(0,0,0,0.5)' }} 
            />
            
            {/* Navigation Controls */}
            {selectedProject.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  style={{
                    position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer', padding: '10px', borderRadius: '50%'
                  }}
                >
                  &#10094;
                </button>
                <button 
                  onClick={nextImage}
                  style={{
                    position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer', padding: '10px', borderRadius: '50%'
                  }}
                >
                  &#10095;
                </button>
                <div style={{ color: '#ccc', marginTop: '0.5rem' }}>
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </>
            )}

            <h3 style={{ color: 'white', marginTop: '1rem' }}>{selectedProject.title}</h3>
            <p style={{ color: '#ccc' }}>{selectedProject.desc}</p>
            
            <button className="button small" onClick={closeModal} style={{ marginTop: '1rem' }}>Close</button>
          </div>
        </div>,
        document.body
      )}

      <div className="close" onClick={onClose}>Close</div>
    </article>
  )
}
