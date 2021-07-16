export default function Header1() {
  return (
    <header className="header header-1">
      <div className="header-1__collections-nav">
        <a href="/link" className="header-1__collection-link">
          Link Top
          <i className="fas fa-chevron-down"></i>
          <ul className="collection-link__sub-links">
            <li>
              <a href="/link" className="header-1__collection-link" >link</a>
            </li>
            <li>
              <a href="/link" className="header-1__collection-link">link</a>
            </li>
            <li>
              <a href="/link" className="header-1__collection-link">link</a>
            </li>
          </ul>
        </a>
        <a href="/link" className="header-1__collection-link">link</a>
        <a href="/link" className="header-1__collection-link">link</a>
      </div>
      <div className="header-1__logo">
        <a href="/link">company</a>
      </div>
      <div className="header-1__collections-nav">
        <a href="/link" className="header-1__collection-link">link</a>
        <a href="/link" className="header-1__collection-link">link <i className="fas fa-chevron-down"></i>
          <ul className="collection-link__sub-links">
            <li>
              <a href="/link" className="header-1__collection-link">link</a>
            </li>
            <li>
              <a href="/link" className="header-1__collection-link">link</a>
            </li>
            <li>
              <a href="/link" className="header-1__collection-link">link</a>
            </li>
          </ul></a>
        <a>
          <i className="fas fa-shopping-cart"></i>
        </a>
        <a>
          <i className="fas fa-user"></i>
        </a>
      </div>
    </header>
  );
}
