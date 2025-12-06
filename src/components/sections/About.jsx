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
        👨‍💻 I turn ideas into apps that actually get used.
      </p>

      <p>
        I spent over ten years as a personal trainer and professional MMA fighter. Every day I was debugging people in real time. Fixing movement patterns, breaking through plateaus, figuring out why someone's shoulder hurt or why they kept missing weight cuts. You test something, measure the result, adjust, test again. Same exact process I use when I code.
      </p>

      <p>
        The moment it clicked for me was realizing that writing software is just training with different tools. Big scary goal? Break it into small sets. Not working? Change the variables and run it again. Progress compounds the same way in both worlds.
      </p>

      <p>
        Now I build tools that make humans better. Workout trackers, client portals, recovery apps. Stuff I wish I'd had back when I was still wrapping hands and programming cycles at 5 a.m. My edge is that I've lived the problems I'm solving. I know what it feels like to fight injured, to cut 20 pounds in a week, to have a client cry because they finally hit a lift they've chased for years. That experience shows up in every line of code I write.
      </p>

      <p>
        Discipline forged in the cage. Attention to detail from a decade of coaching. The stubborn refusal to quit when things get hard. That's what I bring to every project. Whether I'm coaching someone through a deadlift PR or shipping a new feature at 2 a.m., the mindset is identical. Show up, do the work, get a little better today than yesterday.
      </p>

      <p>
        That's me. Fighter turned trainer turned engineer. Still chasing progress, just swapped the gloves for a keyboard.
      </p>

      <div className="close" onClick={onClose}>Close</div>
    </article>
  )
}
