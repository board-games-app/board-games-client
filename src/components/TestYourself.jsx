import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TestYourself() {
  const [answers, setAnswers] = useState({
    number_of_players: "",
    type_of_Game: "",
  });

  const [gameSuggestions, setGameSuggestions] = useState([]);
  const [filteredGameSuggestions, setFilteredGameSuggestions] = useState([]);

  useEffect(() => {
    axios
      .get("https://board-games.adaptable.app/games")
      .then((response) => {
        setGameSuggestions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredGames = suggestGames(answers);
    setFilteredGameSuggestions(filteredGames);
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
  };

  const suggestGames = (userAnswers) => {
    const lowercaseUserAnswers = {
      number_of_players: String(userAnswers.number_of_players).toLowerCase(),
      type_of_Game: userAnswers.type_of_Game.toLowerCase(),
    };

    return gameSuggestions.filter(
      (game) =>
        String(game.number_of_players).toLowerCase() ===
          lowercaseUserAnswers.number_of_players &&
        game.type_of_Game.toLowerCase() === lowercaseUserAnswers.type_of_Game
    );
  };

  return (
    <div>
      <h2>
        Answer these questions to see our suggestions to your next game date
      </h2>
      <form className="formTest" onSubmit={handleSubmit}>
        <br />
        <label>How many players are in your game?</label>
        <input
          type="radio"
          id="Two"
          name="number_of_players"
          value={2}
          onChange={handleRadioChange}
        />
        <label>2</label>
        <input
          type="radio"
          id=""
          name="number_of_players"
          value="2-8"
          onChange={handleRadioChange}
        />
        <label>2-8</label>
        <input
          type="radio"
          id=""
          name="number_of_players"
          value="2-4"
          onChange={handleRadioChange}
        />
        <label>2-4</label>
        <input
          type="radio"
          id=""
          name="number_of_players"
          value="3-6"
          onChange={handleRadioChange}
        />
        <label>3-6</label>
        <input
          type="radio"
          id=""
          name="number_of_players"
          value="2-6"
          onChange={handleRadioChange}
        />
        <label>2-6</label>
        <input
          type="radio"
          id=""
          name="number_of_players"
          value="2 teams"
          onChange={handleRadioChange}
        />
        <label>2 teams</label>
        <input
          type="radio"
          id=""
          name="number_of_players"
          value="3-4"
          onChange={handleRadioChange}
        />
        <label>3-4</label>
        <input
          type="radio"
          id=""
          name="number_of_players"
          value={4}
          onChange={handleRadioChange}
        />
        <label>4</label>

        <br />
        <label>Which of the following types of games aligns with you?</label>
        <input
          type="radio"
          id="Strategy"
          name="type_of_Game"
          value="Strategy"
          onChange={handleRadioChange}
        />
        <label>Strategy</label>
        <input
          type="radio"
          id="Abstract Strategy"
          name="type_of_Game"
          value="Abstract Strategy"
          onChange={handleRadioChange}
        />
        <label>Abstract Strategy</label>
        <input
          type="radio"
          id="Party"
          name="type_of_Game"
          value="Party"
          onChange={handleRadioChange}
        />
        <label>Party</label>
        <input
          type="radio"
          id="Word"
          name="type_of_Game"
          value="Word Game"
          onChange={handleRadioChange}
        />
        <label>Word Game</label>

        <br />
        <button type="submit">Get Suggestion!</button>
      </form>

      <ul className="listTest">
        {filteredGameSuggestions.map((game) => (
          
            <Link to={`/all-games/${game.id}`} key={game.id}>
            <div >
              <h3>{game.name}</h3>
              <img className="Img-games-home" src={game.image} alt="" />
              <p>Type of game: {game.type_of_Game}</p>
              <p>Year created: {game.year}</p>
              </div>
            </Link>
          
        ))}
      </ul>
    </div>
  );
}

export default TestYourself;
