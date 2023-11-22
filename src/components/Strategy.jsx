import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://board-games.adaptable.app/games";

function Strategy() {
  const [strategyGames, setStrategyGames] = useState([]);

  useEffect(() => {
    getStrategyGames();
  }, []);

  const getStrategyGames = () => {
    axios
      .get(API_URL)
      .then((response) => {
        const games = response.data;
        const strategyGames = games.filter((game) => {
          const categoriesArray = separateCategories(game.type_of_Game);
          return categoriesArray.includes("Strategy");
        });
        setStrategyGames(strategyGames);
      })
      .catch((error) => {
        console.log("No game data found in the API response.");
        console.error(error);
      });
  };

  const separateCategories = (typeOfGame) => {
    return typeOfGame.split(', ');
  };

  return (
    <div className="short-page">
      <div className="card-body">
        <h2 className="title_h2">Strategy</h2>
        <div className="Cointainer">
          {strategyGames.map((game) => (
            <Link
              to={`./game-details/${game.id}`}
              key={game.id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <div className="card-body items-center text-center">
                <h3 className="card-title">{game.name}</h3>
                <img className="rounded-xl" src={game.image} alt="" />
                <p>Type of game:
                <div>
                  {separateCategories(game.type_of_Game).map((category, index) => (
                    <span key={index}>{category}</span>
                  ))}
                </div>
                </p>
                <p>Year created: {game.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Strategy;
