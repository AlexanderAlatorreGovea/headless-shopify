import AnnounceBar from '../AnnounceBar/AnnounceBar';
export default function Header4() {
 return(
    <>
    <AnnounceBar/>
    <header className="header header-4">
        <div className="header-4__logo">
         <a href="/link">company</a>
       </div>
       <div className="header-4__collections-nav">
         <a href="/link" className="header-4__collection-link">link <i className="fas fa-chevron-down"></i>
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
         <a href="/link" className="header-4__collection-link">link</a>
         <a href="/link" className="header-4__collection-link">link</a>
       </div>
       <div className="header-4__collections-nav">
         <a>
            <i className="fas fa-shopping-cart"></i>
         </a> 
         <a>       
            <i className="fas fa-user"></i>
         </a>
       </div>
    </header>
    </>
 )    
}