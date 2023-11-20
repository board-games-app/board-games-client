import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditGame (){
    const { gameId } = useParams()
    const [ values, setValues] = useState({
        id: gameId,
        name: " ", 
        wikiWebsite: " ",
        image: "",
    })
    useEffect(() => {
        axios.get("https://board-games.adaptable.app/games/" + gameId )
            .then((response) => {
                setValues({...values, 
                    description: response.data.description,
                    wikiWebsite: response.data.wiki_website, 
                    image: response.data.image})
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
                
                <button type="submit" className="submitBtn">
                    Edit Game
                </button>
            </div>
        </form>
        </div>
    )
}

export default EditGame