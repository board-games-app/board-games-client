import { Link } from "react-router-dom";
import homeImg from "../assets/noun-home-1144.png"

function Navbar() {
  return (
    <nav >
    <div className ="flex flex-wrap items-center justify-between mx-auto p-4 m-0 bg-gray-800 ms-0">
          <Link to="/">
            <img className="img_navbar"
              src={homeImg}
              alt="home_icon"
            />
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <Link to="dice">
                <h3 className="text-slate-50">Throw the dice!</h3>
              </Link>

              <Link to="/add-game">
                <h3 className="text-slate-50" >Add a Game</h3>
              </Link>

              <Link to="/test-yourself">
                <h3 className="text-slate-50">Can't decide?</h3>
              </Link>
            </ul>
          </div>
      </div>
      </nav>
  );
}

export default Navbar;