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
    console.log(e.target);
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
    <div className="short-page">
      <div>
        <h2 className="test_h2">
          Answer these questions to see our suggestions to your next game date
        </h2>
        <form className="formTest" onSubmit={handleSubmit}>
          <br />
          <div className="labelTest">
            <label>
              <p>How many players are in your game?</p>
              <div className="checkbox-container">
                <div className="checkbox-options">
                  <input
                    type="radio"
                    id="Two"
                    name="number_of_players"
                    value={2}
                    onChange={handleRadioChange}
                    className="checkbox"
                  />
                  <label htmlFor="Two">2</label>
                </div>
                <div className="checkbox-options">
                  <input
                    type="radio"
                    id="2-4"
                    name="number_of_players"
                    value="2-4"
                    onChange={handleRadioChange}
                    className="checkbox"
                  />
                  <label>2-4</label>
                </div>
                <div className="checkbox-options">
                  <input
                    type="radio"
                    id="2-6"
                    name="number_of_players"
                    value="2-6"
                    onChange={handleRadioChange}
                    className="checkbox"
                  />
                  <label>2-6</label>
                </div>
                <div className="checkbox-options">
                  <input
                    type="radio"
                    id="2-8"
                    name="number_of_players"
                    value="2-8"
                    onChange={handleRadioChange}
                    className="checkbox"
                  />
                  <label>2-8</label>
                </div>
                <div className="checkbox-options">
                  <input
                    type="radio"
                    id="3-4"
                    name="number_of_players"
                    value="3-4"
                    onChange={handleRadioChange}
                    className="checkbox"
                  />
                  <label>3-4</label>
                </div>
                <div className="checkbox-options">
                  <input
                    type="radio"
                    id="3-6"
                    name="number_of_players"
                    value="3-6"
                    onChange={handleRadioChange}
                    className="checkbox"
                  />
                  <label>3-6</label>
                </div>
                <div className="checkbox-options">
                  <input
                    type="radio"
                    id="Four"
                    name="number_of_players"
                    value={4}
                    onChange={handleRadioChange}
                    className="checkbox"
                  />
                  <label>4</label>
                </div>
                <div className="checkbox-options">
                  <input
                    type="radio"
                    id="2 teams"
                    name="number_of_players"
                    value="2 teams"
                    onChange={handleRadioChange}
                    className="checkbox"
                  />
                  <label>2 teams</label>
                </div>
              </div>
            </label>

            <br />
            <label>
              <p>Which of the following types of games aligns with you?</p>
              <div className="checkbox-container">
                <div className="checkbox-options">
                  <input
                    type="radio"
                    id="Abstract Strategy"
                    name="type_of_Game"
                    value="Abstract Strategy"
                    onChange={handleRadioChange}
                    className="checkbox"
                  />
                  <label>Abstract Strategy</label>
                </div>
                <div className="checkbox-options">
                  <input
                    type="radio"
                    id="Party"
                    name="type_of_Game"
                    value="Party"
                    onChange={handleRadioChange}
                    className="checkbox"
                  />
                  <label>Party</label>
                </div>
                <div className="checkbox-options">
                  <input
                    type="radio"
                    id="Strategy"
                    name="type_of_Game"
                    value="Strategy"
                    onChange={handleRadioChange}
                    className="checkbox"
                  />
                  <label>Strategy</label>
                </div>
                <div className="checkbox-options">
                  <input
                    type="radio"
                    id="Word"
                    name="type_of_Game"
                    value="Word Game"
                    onChange={handleRadioChange}
                    className="checkbox"
                  />
                  <label>Word Game</label>

                  
                </div>
                <div className="checkbox-options">
                  <input
                    type="radio"
                    id="Mixed Genre"
                    name="type_of_Game"
                    value="Mixed Genre"
                    onChange={handleRadioChange}
                    className="checkbox"
                  />
                  <label>Mixed Genre</label>
                </div>
              </div>
            </label>
            <br />
            <button type="submit" className="btn">
              Get Suggestion!
            </button>
          </div>
        </form>

        <section className="Container">
          <ul className="listTest">
            {filteredGameSuggestions.length > 0 ? (
              filteredGameSuggestions.map((game) => (
                <Link
                  to={`/all-games/${game.id}`}
                  key={game.id}
                  className="card w-96 bg-base-100 shadow-xl"
                >
                  <div className="card-body">
                    <div className="card-body items-center text-center">
                      <h3 className="card-title">{game.name}</h3>
                      <img className="rounded" src={game.image} alt="" />
                      <p className="card-actions justify-end">
                        Type of game: {game.type_of_Game}
                      </p>
                      <p className="card-actions justify-end">
                        Year created: {game.year}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="card w-96 bg-base-100 shadow-xl">
              <p className="card-title">Sorry, there are no games with those characteristics.</p>
              </div>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default TestYourself;
