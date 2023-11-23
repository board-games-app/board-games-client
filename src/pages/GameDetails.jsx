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
      <div className="card lg:card-side bg-base-100 shadow-xl">
            <img className="img-details" src={game.image} alt="" />
            <div className="card-body">
            <h2 className= "h2-details">{game.name}</h2>
            <p className="card-body-details">{game.description}</p>
            <br />
            <p>Number of players: {game.number_of_players}</p>
            <p>Year made: {game.year}</p>
            <p>{game.age}</p>
            <p>Type of game: {game.type_of_Game}</p>
            <Link to={game.wiki_website} target="_blank" className="btn btn-ghost">
            Wiki Link
            </Link>
            </div>
      </div>
    </div>
  );
}

export default GameDetails;
