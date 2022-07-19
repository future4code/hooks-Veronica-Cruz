import React from "react"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'

const CharacterDetailPage = () => {

    const navigate = useNavigate()

    const goToList = () =>{
       navigate("/lista") 
    }
    
    return(<>
        <h1>Detalhes dos Personagens</h1>
        <button onClick={goToList}>Lista</button>
        </>
    )
} 

export default CharacterDetailPage