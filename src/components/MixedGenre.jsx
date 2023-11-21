import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://board-games.adaptable.app/games";

function MixedGenre () {
    const [mixedGenreGames, setMixedGenreGames] = useState([]);

    useEffect(() => {
        getMixedGenreGames();
    }, []);

    const getMixedGenreGames = () => {
        axios
            .get(API_URL)
            .then((response) => {
                const games = response.data;
                const mixedGenreGames = games.filter(game => game.type_of_Game === "Mixed Genre");
                setMixedGenreGames(mixedGenreGames);
            })
            .catch((error) => {
                console.log("No game data found in the API response.");
                console.error(error);
            });
    };

    return (
        <div>
    <h2>Mixed Genre</h2>
    {mixedGenreGames.map((game) => (
        <Link to={`./game-details/${game.id}`} key={game.id}>
        <div lassName="card w-96 bg-base-100 shadow-xl">
          <h3>{game.name}</h3>
          <img className="Img-games-home" src={game.image} alt="" />
          <p>Type of game: {game.type_of_Game}</p>
          <p>Year created: {game.year}</p>
        </div>
      </Link>
    ))}
                   
        </div>
    );

}

export default MixedGenre;