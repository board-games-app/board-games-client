import { Link } from "react-router-dom";
import AbstractStrategy from "./AbstractStrategy";
import Strategy from "./Strategy";
import Party from "./Party";
import MixedGenre from "./MixedGenre";
import Word from "./Word";
function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <h2>All Games</h2>
      </Link>
      <Link to="./AbstractStrategy">
        <h2>Abstract Strategy</h2>
      </Link>
      <Link to="./MixedGenre">
        <h2>Mixed Genre</h2>
      </Link>
      <Link to="./Party">
      <h2>Party</h2>
      </Link>
      <Link to="./Strategy">
      <h2>Strategy</h2>
      </Link>
      <Link to="./Word">
      <h2>Word</h2>
      </Link>
    </div>
  );
}

export default Header;
