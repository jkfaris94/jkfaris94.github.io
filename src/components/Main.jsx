import Intro from './sections/Intro'
import Work from './sections/Work'
import About from './sections/About'
import Contact from './sections/Contact'

export default function Main({ isArticleVisible, timeout, articleTimeout, article, onClose, onOpenArticle }) {
  return (
    <div id="main" style={timeout ? {display: 'flex'} : {display: 'none'}}>
      <Intro 
        isActive={article === 'intro' && articleTimeout} 
        isVisible={article === 'intro'} 
        onClose={onClose} 
        onOpenArticle={onOpenArticle}
      />
      <Work 
        isActive={article === 'work' && articleTimeout} 
        isVisible={article === 'work'} 
        onClose={onClose} 
      />
      <About 
        isActive={article === 'about' && articleTimeout} 
        isVisible={article === 'about'} 
        onClose={onClose} 
      />
      <Contact 
        isActive={article === 'contact' && articleTimeout} 
        isVisible={article === 'contact'} 
        onClose={onClose} 
      />
    </div>
  )
}
