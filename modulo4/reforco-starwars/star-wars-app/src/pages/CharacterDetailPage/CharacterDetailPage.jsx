import { useState, useEffect } from "react"
import axios from "axios"


const CharacterDetailPage = (props) => {
    const [details, setDetails] = useState({})
    const[planet,setPlanet] =useState({})
  
    useEffect(() => {
        getCharacterDetails()
    }, [props.url])
   
    ///people/:id/
    const getCharacterDetails = () => {

        axios.get(props.url)
                .then((response) => {
                setDetails(response.data)
            }).catch((error) => 
                console.log(error.message))
    }

    useEffect(() =>{
        getPlanetDetails()
    }, [details.homeworld])

    const getPlanetDetails = () => {

        axios.get(details.homeworld)
                .then((response) => {
                setPlanet(response.data)
            }).catch((error) => 
                console.log(error.message))
    }

        return (<>
        <h1>Detalhes do Personagem</h1>
        <p>Nome:{details.name}</p>
        <p>Planeta de Origem:{planet.name}</p>
        <button onClick={props.goToList}>Voltar</button>
    </>
    )
}

export default CharacterDetailPage