import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://board-games.adaptable.app/games";

function Party() {
  const [partyGames, setPartyGames] = useState([]);

  useEffect(() => {
    getPartyGames();
  }, []);

  const getPartyGames = () => {
    axios
      .get(API_URL)
      .then((response) => {
        const games = response.data;
        const partyGames = games.filter(
          (game) => game.type_of_Game === "Party"
        );
        setPartyGames(partyGames);
      })
      .catch((error) => {
        console.log("No game data found in the API response.");
        console.error(error);
      });
  };

  return (
    <div className="short-page">
      <div className="card-body">
        <h2 className="title_h2">Party</h2>
        <div className="Cointainer">
          {partyGames.map((game) => (
            <Link
              to={`./game-details/${game.id}`}
              key={game.id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <div className="card-body items-center text-center">
                <h3 className="card-title">{game.name}</h3>
                <img className="rounded-xl" src={game.image} />
                <p className="card-actions justify-end">
                  Type of game: {game.type_of_Game}
                </p>
                <p className="card-actions justify-end">
                  Year created: {game.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Party;
