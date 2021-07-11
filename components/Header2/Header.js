export default function Header2() {
 return(
    <header className="header header-2">
        <div className="header-2__logo">
         <a href="/link">company</a>
       </div>
       <div className="header-2__collections-nav">
         <a href="/link">link</a>
         <a href="/link">link</a>
         <a href="/link">link</a>
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