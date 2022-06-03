import React, {useState, useEffect} from "react";
import axios from "axios";

const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState ({});

    useEffect(() => {
        pegaPokemon(pokemon);
    });

    useEffect(()=> {
        if(pokemon !== props.pokemon) {
            pegaPokemon(props.pokemom);
        }
        }, [pokemon]);

        const pegaPokemon = (pokeName) => {
            axios.get(`https://pokeapi.co/api/v2/pokemon(${pokeName}`)
            .then((response) => {
                setPokemon(response.data);
            })
            .catch((error)=> {
                console.log(error);
            });
        };
    

    return(
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            )}
        </div>
    )
    };

    export default PokeCard;