export default function About({ isActive, isVisible, onClose }) {
  return (
    <article 
      id="about" 
      className={`${isActive ? 'active' : ''}`} 
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <h2 className="major">About Me</h2>
      <span className="image main"><img src="/images/victory.JPG" alt="Headshot of Johnny Faris" /></span>
      
      <p>
        👨‍💻 <strong>Turning ideas into real-world apps.</strong>
      </p>

      <p>
        My journey into tech is fueled by a lifelong fascination with complex systems. 
        As a <strong>Personal Trainer with 10+ years of experience</strong>, I spent a decade "debugging" the human body—analyzing biomechanics, optimizing performance, and solving physiological problems for clients.
      </p>

      <p>
        I realized that the logic I applied to training—breaking down big goals into actionable steps, testing variables, and iterating for results—transferred perfectly to software engineering. 
        Now, I aim to integrate these two worlds, using code to build tools that enhance human health and performance.
      </p>

      <p>
        Combined with my background as a <strong>professional MMA fighter</strong>, I bring a unique blend of discipline, strategic thinking, and resilience to every project.
        Whether in the gym or at the keyboard, I am driven by the belief that progress comes from consistent, calculated effort.
      </p>

      <div className="close" onClick={onClose}>Close</div>
    </article>
  )
}
