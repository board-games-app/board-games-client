import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditGame (){
    const { gameId } = useParams()
    const [ values, setValues] = useState({
        id: gameId,
        name: "", 
        wikiWebsite: "",
        image: "",
        year:"", 
        number_of_players: ""
    })
    useEffect(() => {
        axios.get("https://board-games.adaptable.app/games/" + gameId )
            .then((response) => {
                setValues({...values, 
                    name: response.data.name,
                    description: response.data.description,
                    number_of_players: response.data.number_of_players,
                    wikiWebsite: response.data.wiki_website, 
                    image: response.data.image,
                    year: response.data.year,
                    })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        axios.put("https://board-games.adaptable.app/games/" + gameId, values )
            .then((response) => {
                navigate("/")})
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <form className="editContainer" onSubmit={handleSubmit}>
            <div className="labelForm">
                
            <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        className="inputField"
                        value={values.name}
                        onChange={(e)=>{setValues({...values, name: e.target.value})}}
                    />
                </label>

                <label>
                    Description
                    <input
                        type="text"
                        name="description"
                        className="inputField"
                        value={values.description}
                        onChange={(e)=>{setValues({...values, description: e.target.value})}}
                    />
                </label>

                <label>
                    Number of Players
                    <input
                        type="number"
                        name="number_of_players"
                        className="inputField"
                        value={values.number_of_players}
                        onChange={(e)=>{setValues({...values, number_of_players: e.target.value})}}
                    />
                </label>

                <label>
                    Wiki Website
                    <input
                        type="text"
                        name="wiki_website"
                        className="inputField"
                        value={values.wikiWebsite} 
                        onChange={(e)=>{setValues({...values, wikiWebsite: e.target.value})}}
                    />
                </label>

                <label>
                   Image link
                    <input
                        type="text"
                        name="image"
                        className="inputField"
                        value={values.image}
                        onChange={(e)=>{setValues({...values, image: e.target.value})}}
                    />
                </label>

                <label>
                   Year
                    <input
                        type="text"
                        name="year"
                        className="inputField"
                        value={values.year}
                        onChange={(e)=>{setValues({...values, year: e.target.value})}}
                    />
                   </label>
                    
                
                <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md btn-wide ">
                    Edit Game
                </button>
            </div>
        </form>
        </div>
    )
}

export default EditGame