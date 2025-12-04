import Intro from './sections/Intro'
import Work from './sections/Work'
import About from './sections/About'
import Contact from './sections/Contact'

export default function Main({ isArticleVisible, timeout, onClose, article, articleTimeout }) {
  return (
    <div id="main" style={isArticleVisible ? {display: 'flex'} : {display: 'none'}}>
       {article === 'intro' && <Intro onClose={onClose} />}
       {article === 'work' && <Work onClose={onClose} />}
       {article === 'about' && <About onClose={onClose} />}
       {article === 'contact' && <Contact onClose={onClose} />}
    </div>
  )
}

