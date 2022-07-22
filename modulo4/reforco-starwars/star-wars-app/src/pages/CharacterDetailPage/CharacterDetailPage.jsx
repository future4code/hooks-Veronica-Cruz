import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from "../../constants/url"
import axios from "axios"
import PeopleDetails from "./styled"

const CharacterDetailPage = () => {

    const [planetDetails, setPlanetDetails] = useState("")
    const [peopleDetails, setPeopleDetails] = useState("")
  
    const navigate = useNavigate()

    const goToList = () => {
        navigate("/")
    }
    ///people/:id/
    const getPeopleDetails = () => {

        axios.get(`${BASE_URL}/people/`)
            .then((response) => {
                setPeopleDetails(response.data.results)
            }).catch((error) => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        getPeopleDetails()
    }, [])

    const showPeople = () => {
        return peopleDetails && peopleDetails.map((people, index) => {
            return <p key={index}> {people.name}</p>
        })
    }
    //planetas     
    const getPlanetDetails = () => {

        axios.get(`${BASE_URL}/planets/`)
            .then((response) => {
                setPlanetDetails(response.data.results)
            }).catch((error) => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        getPlanetDetails()
    }, [])

    const showPlanet = () => {
        return planetDetails && planetDetails.map((planet, index) => {
            return <p key={index}> {planet.name}</p>
        })
    }

        return (<>
        <h1>Detalhes dos Personagens</h1>
        <button onClick={goToList}>Voltar para Lista</button>
        <PeopleDetails ><h3>Nome:</h3>{showPeople()}</PeopleDetails>
        <div ><h3>Planeta:</h3>{showPlanet()}</div>

    </>
    )
}

export default CharacterDetailPage