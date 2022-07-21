import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import { useNavigate } from 'react-router-dom'
import CharacterCard from "./styled"

const CharacterListPage = () => {
    const [characterList, setCharacterList] = useState("")
    const navigate = useNavigate()


    const getCharacterList = () => {

        axios.get(`${BASE_URL}/people/`)
            .then((response) => {
                setCharacterList(response.data.results)
            }).catch((error) => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        getCharacterList()
    }, [])

    const showCharacters =() =>{
        return characterList && characterList.map((character, index) =>{
            return <CharacterCard key={index}> {character.name}</CharacterCard>
        })
    }

    const goToDetails = () => {
        navigate("/detalhes")
    }

    //  characterList

    return (
        <div>
            <h1>Lista de Personagens</h1>
            <button onClick={goToDetails}>Detalhes</button>
            {showCharacters()}
       
        </div>
    )
}

export default CharacterListPage