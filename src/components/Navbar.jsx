import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div >
      <nav className="Navbar">
        <Link to="/">
          <img
            src="./src/assets/noun-home-1144.png"
            alt="home_icon"
            className="img_navbar"
          />
        </Link>


        <Link to="/add-game">
          <h3>Add a Game</h3>
        </Link>

        <Link to="/test-yourself">
          <h3>Test Yourself</h3>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
