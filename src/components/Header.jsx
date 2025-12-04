export default function Header({ onOpenArticle, timeout }) {
  return (
    <header id="header" style={timeout ? {display: 'none'} : {}}>
      <div className="logo">
        <span className="icon fa-database"></span>
      </div>
      <div className="content">
        <div className="inner">
          <h1>JOHNNY FARIS</h1>
          <p>Take a look through my portfolio!</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="javascript:;" onClick={() => onOpenArticle('intro')}>Intro</a></li>
          <li><a href="javascript:;" onClick={() => onOpenArticle('work')}>Work</a></li>
          <li><a href="javascript:;" onClick={() => onOpenArticle('about')}>About</a></li>
          <li><a href="javascript:;" onClick={() => onOpenArticle('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
