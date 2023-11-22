import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://board-games.adaptable.app/games/";

function RandomGame() {
    const [randomGame, setRandomGame] = useState({});
    const [loading, setLoading] = useState(true);
    const [showGame, setShowGame] = useState(false);

    const getRandomGame = () => {
        axios
            .get(API_URL)
            .then((response) => {
                const gamesData = response.data;
                if (gamesData && gamesData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * gamesData.length);
                    setRandomGame(gamesData[randomIndex]);
                } else {
                    console.log("No game data found in the API response.");
                }
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error getting games from the API...");
                console.error(error);
                setLoading(false);
            });
    };

    const handleButtonClick = () => {
        setShowGame(true);
        getRandomGame();
    };

    return (
        <div>
            <div>
                <h2 className="pick-random">Pick a random game!</h2>
            </div>

            <button className="btn btn-xs sm:btn-sm md:btn-md btn-wide btn-neutral" onClick={handleButtonClick}>Pick it here!</button>

            {showGame && (
                <div>
                    {loading ? (
                        <p>Loading random game...</p>
                    ) : randomGame ? (
                        <div className="Container">
                        <Link to={`/all-games/${randomGame.id}`} key={randomGame.id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="card-body items-center text-center">
                                <h1 className="card-title">{randomGame.name}</h1>
                                <img
                                    className="rounded"
                                    src={randomGame.image}
                                    alt={randomGame.name}
                                />
                                 <p>Type of game: {randomGame.type_of_Game}</p>
                                <p>Year created: {randomGame.year}</p>
                            </div>
                        </div>
                        </Link>
                        </div>
                    ) : (
                        <p>No game data available.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default RandomGame;
