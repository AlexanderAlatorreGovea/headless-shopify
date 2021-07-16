export default function Header2() {
 return(
    <header className="header header-2">
        <div className="header-2__logo">
         <a href="/link">company</a>
       </div>
       <div className="header-2__collections-nav">
         <a href="/link" className="header-2__collection-link">link <i className="fas fa-chevron-down"></i>
          <ul className="collection-link__sub-links">
            <li>
              <a href="/link">link</a>
            </li>
            <li>
              <a href="/link">link</a>
            </li>
            <li>
              <a href="/link">link</a>
            </li>
          </ul></a>
         <a href="/link" className="header-2__collection-link">link</a>
         <a href="/link" className="header-2__collection-link">link</a>
       </div>
       <div className="header-2__collections-nav">
         <a>
            <i className="fas fa-shopping-cart"></i>
         </a> 
         <a>       
            <i className="fas fa-user"></i>
         </a>
       </div>
    </header>
 )    
}