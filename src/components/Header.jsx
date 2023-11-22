import { Link } from "react-router-dom";
function Header() {

 
  return (
    <div className="Header menu menu-vertical lg:menu-horizontal bg-base-600 rounded-box ">
      
      <Link to="/" style={{ textDecoration: 'none' }} className="menu-link">
        <h2 >All Games</h2>
      </Link>
      <Link to="./AbstractStrategy" style={{ textDecoration: 'none' }} className="menu-link">
        <h2 >Abstract Strategy</h2>
      </Link>
      <Link to="./MixedGenre" style={{ textDecoration: 'none' }} className="menu-link">
        <h2 >Mixed Genre</h2>
      </Link>
      <Link to="./Party" style={{ textDecoration: 'none' }} className="menu-link">
      <h2 >Party</h2>
      </Link>
      <Link to="./Strategy" style={{ textDecoration: 'none' }} className="menu-link">
      <h2 >Strategy</h2>
      </Link>
      <Link to="./Word" style={{ textDecoration: 'none' }} className="menu-link">
      <h2 >Word</h2>
      </Link>
      
    </div>
  );
}

export default Header;
