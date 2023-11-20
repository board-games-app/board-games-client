import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RandomGame from "../components/RandomGame";
import GameDetails from "./GameDetails";
import Header from "../components/Header";

function HomePage() {
  const API_URL = "https://board-games.adaptable.app/games";
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [query, setQuery] = useState("");
  const [gameToDelete, setGameToDelete] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((response) => {
        setGames(response.data);
        setFilteredGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filtered = games.filter((game) => {
       return game.name && game.name.toLowerCase().includes((query || '').toLowerCase());
    });
    setFilteredGames(filtered);
  }, [games, query]);

  const deleteGame = (game) => {
    axios
      .delete(`${API_URL}/${game.id}`)
      .then((response) => {
        setGames((prevGames) => prevGames.filter((e) => e.id !== game.id));
        setGameToDelete(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div>
      <div>
        <h1>Best Board Games Ever!</h1>
        <div>
          <input
            placeholder="Search 4 a game"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        {filteredGames.map((game) => {
          return (
            <div className="Games-list" key={game.id}>
              <Link to={`./all-games/${game.id}`} >
                <h3>{game.name}</h3>
                <img className="Img-games-home" src={game.image} alt="" />
                <p>Type of game: {game.type_of_Game}</p>
                <p>Year created: {game.year}</p>
              </Link>
              <button
                onClick={() => {
                  deleteGame(game);
                }}
              >
                Delete
              </button>
              <Link to={`/edit/${game.id}`}>  
              <button>
                Edit
              </button>
              </Link> 
            </div>
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
