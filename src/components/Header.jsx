import { Link } from "react-router-dom";
function Header() {

 
  return (
    <>
    <br />
    <div className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
      
      <Link to="/"  className="menu-link">
        <h2 >All Games</h2>
      </Link>
      <Link to="./AbstractStrategy"  className="menu-link">
        <h2 >Abstract Strategy</h2>
      </Link>
      <Link to="./MixedGenre"  className="menu-link">
        <h2 >Mixed Genre</h2>
      </Link>
      <Link to="./Party"  className="menu-link">
      <h2 >Party</h2>
      </Link>
      <Link to="./Strategy"  className="menu-link">
      <h2 >Strategy</h2>
      </Link>
      <Link to="./Word"  className="menu-link">
      <h2 >Word</h2>
      </Link>
      
    </div>
    </>
  );
}

export default Header;
