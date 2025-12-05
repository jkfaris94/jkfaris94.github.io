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
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [cardImageIndices, setCardImageIndices] = useState({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const openModal = (project, projectIndex = null) => {
    const index = projectIndex !== null ? projectIndex : projects.findIndex(p => p.id === project.id)
    setSelectedProject(project)
    setCurrentProjectIndex(index)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentProjectIndex(null)
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

  const nextProject = (e) => {
    e.stopPropagation()
    if (currentProjectIndex !== null) {
      const nextIndex = (currentProjectIndex + 1) % projects.length
      openModal(projects[nextIndex], nextIndex)
    }
  }

  const prevProject = (e) => {
    e.stopPropagation()
    if (currentProjectIndex !== null) {
      const prevIndex = currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1
      openModal(projects[prevIndex], prevIndex)
    }
  }

  const nextCardImage = (projectId, imageCount) => {
    setCardImageIndices((prev) => {
      const currentIndex = prev[projectId] || 0
      const nextIndex = (currentIndex + 1) % imageCount
      return { ...prev, [projectId]: nextIndex }
    })
  }

  const prevCardImage = (projectId, imageCount) => {
    setCardImageIndices((prev) => {
      const currentIndex = prev[projectId] || 0
      const prevIndex = currentIndex === 0 ? imageCount - 1 : currentIndex - 1
      return { ...prev, [projectId]: prevIndex }
    })
  }


  return (
    <article 
      id="work" 
      className={`${isActive ? 'active' : ''}`} 
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 980px) {
          .work-image-nav-btn-left {
            left: 10px !important;
          }
          .work-image-nav-btn-right {
            right: 10px !important;
          }
        }
        @media (max-width: 736px) {
          .card-image-nav-arrow {
            width: 1.5rem !important;
            height: 1.5rem !important;
            font-size: 0.7rem !important;
          }
          .work-project-nav-buttons {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          .work-project-nav-buttons button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        /* Modal scrollbar styling */
        .work-modal-container {
          scroll-behavior: smooth;
        }
        .work-modal-container::-webkit-scrollbar {
          width: 8px;
        }
        .work-modal-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        .work-modal-container::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        .work-modal-container::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        /* Firefox scrollbar */
        .work-modal-container {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1);
        }
      `}} />
      <h2 className="major">Work</h2>
      
      {/* Grid Layout for Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', position: 'relative' }}>
        {projects.map((project, index) => {
          const projectIndex = index
          
          return (
            <div key={project.id} style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              padding: '1.5rem', 
              borderRadius: '4px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              <div 
                className="image main" 
                style={{ marginBottom: '1rem', cursor: 'pointer', overflow: 'hidden', borderRadius: '4px', position: 'relative' }} 
                onClick={() => openModal(project, projectIndex)}
              >
                {/* Image Navigation Arrows on Cards */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevCardImage(project.id, project.images.length)
                      }}
                      style={{
                        position: 'absolute',
                        left: '0.5rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '50%',
                        width: '2rem',
                        height: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'white',
                        fontSize: '0.9rem',
                        zIndex: 10,
                        transition: 'all 0.3s ease',
                        opacity: 0.8
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1'
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0.8'
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'
                      }}
                      className="card-image-nav-arrow"
                    >
                      <i className="fa fa-chevron-left"></i>
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextCardImage(project.id, project.images.length)
                      }}
                      style={{
                        position: 'absolute',
                        right: '0.5rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '50%',
                        width: '2rem',
                        height: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'white',
                        fontSize: '0.9rem',
                        zIndex: 10,
                        transition: 'all 0.3s ease',
                        opacity: 0.8
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1'
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0.8'
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'
                      }}
                      className="card-image-nav-arrow"
                    >
                      <i className="fa fa-chevron-right"></i>
                    </button>
                  </>
                )}
                
                <img 
                  src={project.images[cardImageIndices[project.id] || 0]} 
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
                {project.tools.map((tool, toolIndex) => (
                  <span key={toolIndex} style={{ 
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
          )
        })}
      </div>

      {/* Modal / Carousel */}
      {mounted && selectedProject && createPortal(
        <div 
          className="work-modal-container"
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            zIndex: 10000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '2rem',
            overflowY: 'auto',
            overflowX: 'hidden'
          }} 
          onClick={closeModal}
        >
          
          <div 
            style={{ 
              position: 'relative', 
              maxWidth: '1000px', 
              width: '100%', 
              textAlign: 'center',
              margin: 'auto',
              padding: '2rem 0 3rem 0',
              minHeight: 'min-content'
            }} 
            onClick={(e) => e.stopPropagation()}
          >

            <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`} 
                style={{ maxHeight: '70vh', maxWidth: '100%', borderRadius: '4px', marginBottom: '1rem', boxShadow: '0 0 20px rgba(0,0,0,0.5)' }} 
              />
              
              {/* Image Navigation Controls */}
              {selectedProject.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="image-nav-btn work-image-nav-btn-left"
                    style={{
                      position: 'absolute', 
                      left: '-60px', 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      background: 'rgba(255, 255, 255, 0.15)', 
                      border: '2px solid rgba(255, 255, 255, 0.3)', 
                      color: 'white', 
                      fontSize: '2rem', 
                      cursor: 'pointer', 
                      padding: '15px 18px', 
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 10001,
                      transition: 'all 0.3s ease',
                      lineHeight: '1'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                    }}
                  >
                    &#10094;
                  </button>
                  <button 
                    onClick={nextImage}
                    className="image-nav-btn work-image-nav-btn-right"
                    style={{
                      position: 'absolute', 
                      right: '-60px', 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      background: 'rgba(255, 255, 255, 0.15)', 
                      border: '2px solid rgba(255, 255, 255, 0.3)', 
                      color: 'white', 
                      fontSize: '2rem', 
                      cursor: 'pointer', 
                      padding: '15px 18px', 
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 10001,
                      transition: 'all 0.3s ease',
                      lineHeight: '1'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                      e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                    }}
                  >
                    &#10095;
                  </button>
                </>
              )}
            </div>

            {/* Image Counter */}
            {selectedProject.images.length > 1 && (
              <div style={{ color: '#ccc', marginTop: '0.5rem', marginBottom: '1rem' }}>
                Image {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            )}

            <h3 style={{ color: 'white', marginTop: '1rem' }}>{selectedProject.title}</h3>
            <p style={{ color: '#ccc' }}>{selectedProject.desc}</p>
            
            {/* Project Navigation Buttons (Floating Bottom) */}
            <div className="project-nav-buttons work-project-nav-buttons" style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginTop: '1.5rem',
              width: '100%',
              flexWrap: 'wrap',
              gap: '0.5rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <button
                onClick={prevProject}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px',
                  color: 'white',
                  padding: '0.6rem 1.2rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <i className="fa fa-chevron-left"></i>
                Previous Project
              </button>
              
              <button className="button small" onClick={closeModal} style={{ margin: 0 }}>Close</button>
              
              <button
                onClick={nextProject}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px',
                  color: 'white',
                  padding: '0.6rem 1.2rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Next Project
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      <div className="close" onClick={onClose}>Close</div>
    </article>
  )
}
