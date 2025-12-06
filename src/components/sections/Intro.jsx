import Image from 'next/image'

// Now accepts 'onOpenArticle' to switch sections
export default function Intro({ isActive, isVisible, onClose, onOpenArticle }) {
  return (
    <article 
      id="intro" 
      className={`${isActive ? 'active' : ''}`} 
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <h2 className="major">Intro</h2>
      <span className="image main">
        <img src="/images/headshot.jpeg" alt="Headshot" />
      </span>
      
      <p>
        I am a Full-Stack Software Engineer proficient in building dynamic, scalable web applications. 
        I specialize in the React ecosystem and have a strong foundation in both SQL and modern backend services.
      </p>

      {/* Keep the stack here for immediate impact */}
      <p>My technical toolkit includes:</p>
      <ul>
        <li><strong>Front-End:</strong> React, Next.js, JavaScript (ES6+), HTML5, CSS3/Sass</li>
        <li><strong>Back-End:</strong> Node.js, Express, PostgreSQL, Knex, Supabase, Firebase</li>
        <li><strong>Tools:</strong> Git, RESTful APIs, Jest, CI/CD Deployment</li>
      </ul>

      <p>
        I am passionate about continuous learning and keeping up with modern tech trends. 
        Currently, I am expanding my skills in <strong>Tailwind CSS</strong> and <strong>Framer Motion</strong>.
      </p>
      
      <ul className="actions">
        {/* 'View My Work' now functions correctly */}
        <li>
          <button 
            className="button primary" 
            onClick={() => onOpenArticle('work')}
          >
            View My Work
          </button>
        </li>
        {/* New 'About Me' button */}
        <li>
          <button 
            className="button" 
            onClick={() => onOpenArticle('about')}
          >
            More About Me
          </button>
        </li>
      </ul>

      <div className="close" onClick={onClose}>Close</div>
    </article>
  )
}
