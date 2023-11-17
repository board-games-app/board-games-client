import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://board-games.adaptable.app/games";

function AddGamePage () {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [numberOfPlayers, setNumberOfPlayers] = useState("");
    const [age, setAge] = useState("");
    const [year, setYear] = useState("");
    const [typeOfGame, setTypeOfGame] = useState("");
    const [image, setImage] = useState("");
    const [wikiWebsite, setWikiWebsite] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const requestBody = {
            name,
            description,
            number_of_players: numberOfPlayers,
            age,
            year,
            type_of_Game : typeOfGame,
            image,
            wiki_website : wikiWebsite
        };

        axios.post(API_URL, requestBody)
        .then(() => {
            navigate("/");
        })
        .catch((error) => {
            console.log("Error creating game from the API...");
            console.log(error);
        });
};
    
    return (
        <div>
        <div>
            <h2>This is the games details page</h2>
        </div>

        <form className="formContainer" onSubmit={handleSubmit}>
            <div className="labelForm">
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        className="inputField"
                        value={name}
                        onChange={(e) => { setName(e.target.value); }}
                    />
                </label>
                <label>
                    Description
                    <input
                        type="text"
                        name="description"
                        className="inputField"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value); }}
                    />
                </label>
                <label>
                    Number of players
                    <input
                        type="text"
                        name="number_of_players"
                        className="inputField"
                        value={numberOfPlayers}
                        onChange={(e) => { setNumberOfPlayers(e.target.value); }}
                    />
                </label>
                <label>
                    Age
                    <input
                        type="number"
                        name="age"
                        className="inputField"
                        value={age}
                        onChange={(e) => { setAge(e.target.value); }}
                    />
                </label>
                <label>
                    Year
                    <input
                        type="number"
                        name="year"
                        className="inputField"
                        value={year}
                        onChange={(e) => { setYear(e.target.value); }}
                    />
                </label>
                <label>
                   Type of game
                    <input
                        type="text"
                        name="type_of_Game"
                        className="inputField"
                        value={typeOfGame}
                        onChange={(e) => { setTypeOfGame(e.target.value); }}
                    />
                </label>
                <label>
                   Image link
                    <input
                        type="text"
                        name="image"
                        className="inputField"
                        value={image}
                        onChange={(e) => { setImage(e.target.value); }}
                    />
                </label>
                <label>
                   Wiki website
                    <input
                        type="text"
                        name="wiki_website"
                        className="inputField"
                        value={wikiWebsite}
                        onChange={(e) => { setWikiWebsite(e.target.value); }}
                    />
                </label>
                <button type="submit" className="submitBtn">
                    Add Game
                </button>
            </div>
        </form>
        </div>
    );

}

export default AddGamePage