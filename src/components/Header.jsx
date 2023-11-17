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
        <AbstractStrategy />
      </Link>
      <Link to="./MixedGenre">
        <MixedGenre />
      </Link>
      <Link to="./Party">
        <Party />
      </Link>
      <Link to="./Strategy">
        <Strategy />
      </Link>
      <Link to="./Word">
        <Word />
      </Link>
    </div>
  );
}

export default Header;
