export default function Work({ isActive, isVisible, onClose }) {
  return (
    <article 
      id="work" 
      className={`${isActive ? 'active' : ''}`} 
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <h2 className="major">Work</h2>
      <span className="image main"><img src="/images/collage.png" alt="Collage of project photos" /></span>
      <p><strong>Operations Holdings Inc</strong> 
        A <strong>React</strong>-based portfolio web application developed for <strong>Operations Holdings</strong>, 
        a multimillion-dollar company. Built with <strong>Tailwind CSS</strong> for responsive, clean design and enhanced 
        with advanced custom animations using <strong>Framer Motion</strong>. The project delivers a sleek, professional 
        interface featuring a client-requested <strong>red, white, and blue theme</strong> with smooth, engaging motion 
        effects that elevate user experience while maintaining simplicity and polish.
        <br/><a href="https://operationsholdings.com">Operations Holdings Inc</a>
      </p>
      <p><strong>Bakery Inventory Manager</strong> 
        The Bakery Inventory Management System is a full-stack web application built with React, Express, Node.js, and a cloud-hosted 
        PostgreSQL database. It enables Maeve’s Fine Baked Goods to efficiently manage raw materials, recipes, and finished baked goods 
        through a seamless interface. The system features full CRUD functionality, a RESTful API, and dynamic baking logic that 
        automatically adjusts ingredient inventory when recipes are baked. With robust server-side logging, error handling, and a 
        responsive frontend, this project demonstrates full-stack integration, database design, and production-ready deployment.
        <br/><a href="https://bakery-inventory-manager-frontend.onrender.com/">LIVE DEMO</a>
        <br/><a href="https://github.com/jkfaris94/bakery-inventory-manager">BAKERY INVENTORY MANAGER</a></p>
      <p><strong>WeLoveMovies</strong> 
        is a RESTful API built with Node.js, Express, Knex, and PostgreSQL that powers a movie database. 
        It supports browsing movies, theaters, and reviews with full CRUD operations, includes robust error handling, and follows REST best 
        practices for clean, scalable backend design.
        <br/><a href="https://github.com/jkfaris94/WeLoveMovies-back-end">WE LOVE MOVIES</a></p>
      <p><strong>Flashcard-O-Matic</strong> 
        is a React app that lets users create, edit, and study custom flashcard decks. 
        It features full CRUD functionality, React Router navigation, and a clean component-based architecture, 
        showcasing my skills in state management and building user-friendly learning tools.
        <br/><a href="https://github.com/jkfaris94/Flashcard-O-Matic">FLASHCARD-O-MATIC</a>
      </p>
      <p><strong>Champion Lifestyle</strong> 
        is a fully deployed WordPress application hosted on Hostinger, leveraging the Kadence theme for performance and scalability. 
        The site features an SEO-optimized blog organized into three core categories—training, nutrition, and recovery—with structured 
        metadata to improve search visibility. It implements responsive design principles for cross-device compatibility and includes integrated 
        lead-generation features such as custom contact forms and fitness evaluation request handling.
        <br/><a href="https://championlifestyle.fit">CHAMPION LIFESTYLE</a>
      </p>
      <div className="close" onClick={onClose}>Close</div>
    </article>
  )
}
