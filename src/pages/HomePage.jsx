import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RandomGame from "../components/RandomGame";
import GameDetails from "./GameDetails";
import Header from "../components/Header";

function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("https://board-games.adaptable.app/games")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
      <h1>Best Board Games Ever!</h1>

      {games.map((game) => {
        return (
          <Link to={`./all-games/${game.id}`} key={game.id}>
            <div className="Games-list">
              <h3>{game.name}</h3>
              <img className="Img-games-home" src={game.image} alt="" />
              <p>Type of game: {game.type_of_Game}</p>
              <p>Year created: {game.year}</p>
            </div>
          </Link>
        );
      })}
    </div>
    <div>
       <RandomGame />
    </div>
    </div>
  
  );
}

export default HomePage;
