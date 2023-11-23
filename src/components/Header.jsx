import { Link } from "react-router-dom";
function Header() {

 
  return (
    <>
    <br />
    <div className="Header">
      
      <Link to="/"  className="menu-link">
        <h2 className="header-h2">All Games</h2>
      </Link>
      <Link to="./AbstractStrategy"  className="menu-link">
        <h2 className="header-h2">Abstract Strategy</h2>
      </Link>
      <Link to="./MixedGenre"  className="menu-link">
        <h2 className="header-h2">Mixed Genre</h2>
      </Link>
      <Link to="./Party"  className="menu-link">
      <h2 className="header-h2">Party</h2>
      </Link>
      <Link to="./Strategy"  className="menu-link">
      <h2 className="header-h2">Strategy</h2>
      </Link>
      <Link to="./Word"  className="menu-link">
      <h2 className="header-h2">Word</h2>
      </Link>
      
    </div>
    </>
  );
}

export default Header;
