import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const API_URL = "https://board-games.adaptable.app/games";
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [query, setQuery] = useState("");

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
      return game.name.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredGames(filtered);
  }, [games, query]);

  return (
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
  );
}

export default HomePage;
