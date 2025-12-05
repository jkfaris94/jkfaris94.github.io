export default function Contact({ isActive, isVisible, onClose }) {
  return (
    <article 
      id="contact" 
      className={`${isActive ? 'active' : ''}`} 
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <h2 className="major">Contact</h2>
      <ul>
        <li><strong>Email:</strong> jkfaris@gmail.com</li>
        <li><strong>Cell:</strong> (253)906-5208</li>
      </ul>
      <ul className="icons">
        <li><a href="https://www.linkedin.com/in/johnny-faris/" className="icon fa-linkedin"><span className="label">fa-linkedin</span></a></li>
        <li><a href="https://github.com/jkfaris94" className="icon fa-github"><span className="label">GitHub</span></a></li>
      </ul>
      <div className="close" onClick={onClose}>Close</div>
    </article>
  )
}
