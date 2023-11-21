import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
        <nav>
          <Link to="/">
            <img
              src="./src/assets/noun-home-1144.png"
              alt="home_icon"
              className="img_navbar"
            />
          </Link>
          <div >
            <ul >
              <Link to="dice">
                <h3 >Throw the dice!</h3>
              </Link>

              <Link to="/add-game">
                <h3 >Add a Game</h3>
              </Link>

              <Link to="/test-yourself">
                <h3 >Test Yourself</h3>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
   
  );
}

export default Navbar;