import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function GameDetails() {
  const [game, setGame] = useState({});
  const { gameId } = useParams();

  const API_URL = "https://board-games.adaptable.app/games";

  const getGame = () => {
    axios
      .get(`${API_URL}/${gameId}`)
      .then((response) => {
        setGame(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGame();
  }, [gameId]);

  return (
    <div className="Container-details">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <div className="card-body">
            <h2 className="card-title">{game.name}</h2>
            <img className="rounded-xl"  src={game.image} alt="" />
            <br />
            <p>{game.description}</p>
            <br />
            <p>Number of players: {game.number_of_players}</p>
            <br />
            <p>Year made: {game.year}</p>
            <br />
            <p>{game.age}</p>
            <br />
            <p>Type of game: {game.type_of_Game}</p>
            <br />
            <Link to={game.wiki_website} target="_blank" className="menu-link">
            Wiki Link
            </Link>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
