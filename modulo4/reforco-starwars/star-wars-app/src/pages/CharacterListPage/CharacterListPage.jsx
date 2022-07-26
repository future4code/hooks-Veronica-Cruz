import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import CharacterCard from "./styled"

const CharacterListPage = (props) => {
    const [characterList, setCharacterList] = useState([])
   

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
        return characterList.map((character, index) =>{
            return <CharacterCard onClick={() => props.goToDetailsPage(character.url)} key={index}> {character.name}</CharacterCard>
        })
    }

  

    return (
        <div>
            <h1>Lista de Personagens</h1>
            {showCharacters()}
        </div>
    )
}

export default CharacterListPage