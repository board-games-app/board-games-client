import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://board-games.adaptable.app/games";

function AbstractStrategy() {
  const [abstractStrategyGames, setAbstractStrategyGames] = useState([]);

  useEffect(() => {
    getAbstractStrategyGames();
  }, []);

  const getAbstractStrategyGames = () => {
    axios
      .get(API_URL)
      .then((response) => {
        const games = response.data;
        const abstractStrategyGames = games.filter((game) => {
          const categoriesArray = separateCategories(game.type_of_Game);
          return categoriesArray.includes("Abstract Strategy");
        });
        setAbstractStrategyGames(abstractStrategyGames);
      })
      .catch((error) => {
        console.log("No game data found in the API response.");
        console.error(error);
      });
  };

  const separateCategories = (typeOfGame) => {
    return typeOfGame.split(", ");
  };

  return (
    <div className="short-page">
      
        <h2 className="title_h2">Abstract Strategy</h2>
        <div className="Container-home">
          {abstractStrategyGames.map((game) => (
            <Link
              to={`./game-details/${game.id}`}
              key={game.id}
              className="card bg-base-100 shadow-xl"
            >
              <div className="card-body items-center text-center">
                <h3 className="card-title">{game.name}</h3>
                <img className="rounded-xl" src={game.image} alt="" />
                <h3 className="card-body">
                  <div className="badge badge-ghost">
                    Players: {game.number_of_players}
                  </div>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      
    </div>
  );
}

export default AbstractStrategy;
