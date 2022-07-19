import React from "react"
import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import {useNavigate} from 'react-router-dom'

const CharacterListPage = () => {
    const [characterList, setCharacterList] = useState("")
    const navigate = useNavigate()

    
    axios.get(`${BASE_URL}/people/`).then((response)=>{
        setCharacterList(response.data.results)
    })
    const goToDetails = () =>{
        navigate("/detalhes") 
     }


    return(
        <>
        <h1>Lista de Personagens</h1>
        <button onClick={goToDetails}>Detalhes</button>
      </>
    )
} 

export default CharacterListPage