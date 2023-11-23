import { Link } from "react-router-dom";
import homeImg from "../assets/noun-home-1144.png"
import icon_dice from "../assets/icon_dice.png"
import icon_question from "../assets/question-mark.png"
import icon_add from "../assets/noun-add.png"

function Navbar() {
  return (
    <nav className="Navbar">
          <Link to="/">
            <img className="img_navbar"
              src={homeImg}
              alt="home_icon"
            />
          </Link>

          <div className="menu-navbar">
            <ul>
              <li className="lines-navbar">
                <Link to="dice">
                  <img src={icon_dice} alt="icon-dice" className="iconDice"/>
                  <h3 className="text-slate-50">Throw the dice!</h3>
                </Link>
                </li>

                <li className="lines-navbar"> 
                <Link to="/add-game">
                  <img src={icon_add} alt="icon-add" className="iconAdd"/> 
                  <h3 className="text-slate-50" >Add </h3>
                </Link>
                </li>

                <li className="lines-navbar">
                <Link to="/test-yourself">
                  <img src={icon_question} alt="icon-question" className="iconQuestion"/> 
                  <h3 className="text-slate-50">Can't decide?</h3>
                </Link>
                </li>
              </ul>
          </div>
      
      </nav>
  );
}

export default Navbar;