import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://board-games.adaptable.app/games";

function AddGamePage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [numberOfPlayers, setNumberOfPlayers] = useState("");
    const [age, setAge] = useState("");
    const [year, setYear] = useState("");
    const [typeOfGame, setTypeOfGame] = useState([]);
    const [image, setImage] = useState("");
    const [wikiWebsite, setWikiWebsite] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    


    const navigate = useNavigate();

    const formatSelectedTypes = (types) => {
        return types.join(', ');
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = {
            name,
            description,
            number_of_players: numberOfPlayers,
            age,
            year,
            type_of_Game: formatSelectedTypes(selectedCategories),
            image,
            wiki_website: wikiWebsite
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

    const handleTypeOfGameChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedCategories(prevCategories => [...prevCategories, value]);
        } else {
            setSelectedCategories(prevCategories => prevCategories.filter(category => category !== value));
        }
    };
    

    return (
        <div>
            <div>
                <br />
                <h2 className="title_h2">Feel free to add a new game!</h2>
            </div>

            <form className="formContainer" onSubmit={handleSubmit}>
                <div className="labelForm">
                    <label>
                        <p>Name</p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter game name..."
                            required
                            className="inputField"
                            value={name}
                            onChange={(e) => { setName(e.target.value); }}
                        />
                    </label>
                    <label>
                        <p>Description</p>
                        <input
                            type="text"
                            name="description"
                            placeholder="Enter description..."
                            required
                            className="inputField"
                            value={description}
                            onChange={(e) => { setDescription(e.target.value); }}
                        />
                    </label>
                    <label>
                        <p>Number of players</p>
                        <input
                            type="number"
                            name="number_of_players"
                            placeholder="Enter number of players..."
                            required
                            className="inputField"
                            value={numberOfPlayers}
                            onChange={(e) => { setNumberOfPlayers(e.target.value); }}
                        />
                    </label>
                    <label>
                        <p>Age</p>
                        <input
                            type="number"
                            name="age"
                            placeholder="Enter recommended age..."
                            required
                            className="inputField"
                            value={age}
                            onChange={(e) => { setAge(e.target.value); }}
                        />
                    </label>
                    <label>
                        <p>Year</p>
                        <input
                            type="number"
                            name="year"
                            placeholder="Enter release year..."
                            className="inputField"
                            value={year}
                            onChange={(e) => { setYear(e.target.value); }}
                        />
                    </label>
                    <label><p>Type of game</p></label>
                        <div>
                            <div className="checkbox-options">
                                <input
                                    type="checkbox"
                                    value="Abstract Strategy"
                                    checked={selectedCategories.includes('Abstract Strategy')}
                                    onChange={handleTypeOfGameChange}
                                    className="checkbox"
                                />
                                <label>Abstract Strategy</label>
                            </div>
                            <div className="checkbox-options">
                                <input
                                    type="checkbox"
                                    value="Mixed Genre"
                                    checked={selectedCategories.includes('Mixed Genre')}
                                    onChange={handleTypeOfGameChange}
                                    className="checkbox"
                                />
                                <label>Mixed Genre</label>
                            </div>
                            <div className="checkbox-options">
                                <input
                                    type="checkbox"
                                    value="Party"
                                    checked={selectedCategories.includes('Party')}
                                    onChange={handleTypeOfGameChange}
                                    className="checkbox"
                                />
                                <label>Party</label>
                            </div>
                            <div className="checkbox-options">
                                <input
                                    type="checkbox"
                                    value="Strategy"
                                    checked={selectedCategories.includes('Strategy')}
                                    onChange={handleTypeOfGameChange}
                                    className="checkbox"
                                />
                                <label>Strategy</label>
                            </div>
                            <div className="checkbox-options">
                                <input
                                    type="checkbox"
                                    value="Word Game"
                                    checked={selectedCategories.includes('Word Game')}
                                    onChange={handleTypeOfGameChange}
                                    className="checkbox"
                                />
                                <label>Word</label>
                            </div>
                        </div>
                    <label>
                        <p>Image link</p>
                        <input
                            type="text"
                            name="image"
                            placeholder="Enter image URL..."
                            className="inputField"
                            value={image}
                            onChange={(e) => { setImage(e.target.value); }}
                        />
                    </label>
                    <label>
                        <p>Wiki website</p>
                        <input
                            type="text"
                            name="wiki_website"
                            placeholder="Enter Wiki URL..."
                            className="inputField"
                            value={wikiWebsite}
                            onChange={(e) => { setWikiWebsite(e.target.value); }}
                        />
                    </label>
                    <button type="submit" className="btn">
                        Add Game
                    </button>
                </div>
            </form>
        </div>
    );

}

export default AddGamePage