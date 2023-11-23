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
  const [buttonClicked, setButtonClicked] = useState(false);

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
    setButtonClicked(true);

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
        <br />
        <h2 className="title_h2">
          Answer these questions to see <br></br> our suggestions to your next game date
        </h2>
        <form className="formTest" onSubmit={handleSubmit}>
          <br />
          <div className="labelTest">
            <label>
              <p>How many players are in your game?</p>
              </label>
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

            <br />
            <label>
              <p>Which of the following types of games aligns with you?</p>
              </label>
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
            <br />
            <button type="submit" className="btn">
              Get Suggestion!
            </button>
          </div>
        </form>

        <section className="Container">
          <ul className="listTest">
            {buttonClicked && filteredGameSuggestions.length === 0 && (
              <div className="card w-90% md:w-96 bg-base-100 shadow-xl">
                <div role="alert" className="alert">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Sorry, there are no games with these characteristics.</span>
                </div>
              </div>
            )}
            {filteredGameSuggestions.length > 0 && filteredGameSuggestions.map((game) => (
              <Link
                to={`/all-games/${game.id}`}
                key={game.id}
                className="card w-96 bg-base-100 shadow-xl"
              >
                <div className="card-body">
                  <div className="card-body items-center text-center">
                    <h3 className="card-title">{game.name}</h3>
                    <img className="rounded" src={game.image} alt="" />
                    <h3 className="card-body">
                        <div class="badge badge-ghost">Players: {game.number_of_players}</div>
                      </h3>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default TestYourself;
