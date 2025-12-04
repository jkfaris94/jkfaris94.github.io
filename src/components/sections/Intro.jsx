import Image from 'next/image'

export default function Intro({ onClose }) {
  return (
    <article id="intro" className="active" style={{display: 'block'}}>
      <h2 className="major">Intro</h2>
      <span className="image main">
        <img src="/images/headshot.jpeg" alt="" />
      </span>
      <p>Through my software engineering course, I gained hands-on experience in building full-stack applications, 
        mastering both front-end and back-end development. I learned to design responsive user interfaces with HTML, CSS, and JavaScript, 
        develop dynamic web applications using React, and implement robust server-side logic with Node.js and Express. On the back end, 
        I worked extensively with PostgreSQL and Knex for database design and query optimization, while following RESTful API principles. 
        Additionally, I strengthened my understanding of version control with Git, testing methodologies, and deployment best practices, 
        enabling me to deliver scalable, maintainable, and production-ready applications. Take a look at some of my
        <a href="#work">work</a>.</p>
      <div className="close" onClick={onClose}>Close</div>
    </article>
  )
}

