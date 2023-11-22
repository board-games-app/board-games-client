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
                <h2>Pick a random game!</h2>
            </div>

            <button className="btn" onClick={handleButtonClick}>Pick it here!</button>

            {showGame && (
                <div>
                    {loading ? (
                        <p>Loading random game...</p>
                    ) : randomGame ? (
                        <Link to={`/all-games/${randomGame.id}`} key={randomGame.id}>
                        <div>
                            <div className="gameDetails">
                                <h1>{randomGame.name}</h1>
                                <img
                                    className="Img-games-home"
                                    src={randomGame.image}
                                    alt={randomGame.name}
                                />
                                {/*<p>{randomGame.description}</p>
                                <p>Number of players: {randomGame.number_of_players}</p>*/}
                                 <p>Type of game: {randomGame.type_of_Game}</p>
                                <p>Year created: {randomGame.year}</p>
                                {/*<p>{randomGame.age}</p>*/}
                               
                               {/*<Link to={randomGame.wiki_website} target="_blank">
                                    Wiki Link
                                </Link>*/}
                            </div>
                        </div>
                        </Link>
                    ) : (
                        <p>No game data available.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default RandomGame;
