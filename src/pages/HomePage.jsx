import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RandomGame from "../components/RandomGame";

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
      return (
        game.name &&
        game.name.toLowerCase().includes((query || "").toLowerCase())
      );
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
        <br />
        <div>
          <input
            placeholder="Search 4 a game"
            onChange={(event) => setQuery(event.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <section className="Container-home">
          {filteredGames.map((game) => {
            return (
              <div key={game.id} className="card bg-base-100 shadow-xl ">
                <div className="card-body items-center text-center">
                  <Link to={`./all-games/${game.id}`}>
                    <div className="card-body items-center text-center">
                      <h3 className="card-title">{game.name}</h3>
                      <img className="rounded" src={game.image} />
                      <h3 className="card-body">
                        <div class="badge badge-ghost">Players: {game.number_of_players}</div>
                      </h3>
                      
                    </div>
                  </Link>
                  <button
                    className="btn btn-xs sm:btn-sm md:btn-md btn-wide "
                    onClick={() => {
                      deleteGame(game);
                    }}
                  >
                    Delete
                  </button>
                  <Link to={`/edit/${game.id}`}>
                    <button className="btn btn-xs sm:btn-sm md:btn-md btn-wide btn-neutral">Edit</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </div>
      <div className="random-section">
        <RandomGame />
      </div>
    </div>
  );
}

export default HomePage;
