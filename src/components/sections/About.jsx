export default function About({ isActive, isVisible, onClose }) {
  return (
    <article 
      id="about" 
      className={`${isActive ? 'active' : ''}`} 
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <h2 className="major">About</h2>
      <span className="image main"><img src="/images/victory.JPG" alt="Headshot of Johnny Faris" /></span>
      <p>
        👨‍💻 Turning ideas into real-world apps.
        I’m a full-stack developer with hands-on experience building applications using JavaScript, React, Express.js, PostgreSQL, Knex and more. 
        I have developed projects ranging from recipe managers and blogging platforms to inventory systems for small businesses.
        <br/><br/>
        Before coding, I was a professional MMA fighter—an experience that taught me the same qualities I now bring to software development: 
        discipline, adaptability, and problem-solving under pressure. In the cage, you train for every scenario and think strategically in real time; in development, 
        you apply that same mindset to debugging, architecting solutions, and creating products that work.
        <br/><br/>
        ⚡ Technical Highlights:
        <br/>
        React, JavaScript (ES6+), Node.js, Express
        <br/>
        REST APIs & PostgreSQL (Knex ORM)
        <br/>
        Test-driven development & error handling
        <br/>
        Building user-friendly, goal-driven applications
        <br/><br/>
        I thrive on solving tough problems, writing clean code, and continuously learning. Whether in the gym, the cage, or at the keyboard, 
        my work ethic is built on persistence and the belief that progress comes through consistent effort.
      </p>
      <div className="close" onClick={onClose}>Close</div>
    </article>
  )
}
