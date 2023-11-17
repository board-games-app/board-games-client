import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

function GameDetails (props) {
    const [game, setGame] = useState({})
    const {gameId} = useParams()

    const API_URL = "https://board-games.adaptable.app/games"

    const getGame = () => {
        axios.get(`${API_URL}/${gameId}`)
            .then((response) =>{
                setGame(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() =>{
        getGame()
    }, [gameId])
   

    return (
        <div>
            <h2>{game.name}</h2>
            <img className="Img-games-home"src={game.image} alt="" />
            <p>{game.description}</p>
            <p>Number of players: {game.number_of_players}</p>
            <p>Year made: {game.year}</p>
            <p>{game.age}</p>
            <p>Type of game: {game.type_of_Game}</p>
            <Link to={game.wiki_website} target="_blank">Wiki Link</Link>
        </div>
    )
}

export default GameDetails