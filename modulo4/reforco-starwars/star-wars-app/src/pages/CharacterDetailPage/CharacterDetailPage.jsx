import React from "react"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from "../../constants/url"
import axios from "axios"

const CharacterDetailPage = () => {

    const [personagensDetails, setPersonagensDetails] = useState("")
    const navigate = useNavigate()

    const goToList = () =>{
       navigate("/") 
    }
    ///people/:id/
    // const getPersonagensDetails = () => {

    //     axios.get(`${BASE_URL}/people/${id}`)
    //         .then((response) => {
    //             setPersonagensDetails(response.data.results)
    //         }).catch((error) => {
    //             console.log(error.message)
    //         })
    // }
    return(<>
        <h1>Detalhes dos Personagens</h1>
        <button onClick={goToList}>Lista</button>
        </>
    )
} 

export default CharacterDetailPage