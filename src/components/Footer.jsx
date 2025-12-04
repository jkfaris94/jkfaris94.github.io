export default function Footer({ timeout }) {
  return (
    <footer id="footer" style={timeout ? {display: 'none'} : {}}>
      <p className="copyright">Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
  )
}

