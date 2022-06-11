import axios from "axios"
import React from "react"


const Header = (props) => {
    return (
        <>
          <h1>Astromatch</h1>
         
        <button onClick={() => props.changePage('verMatches')}>Ver Matches</button>
        <button onClick={()=> props.choosePerson('true')}>Curtir</button>
        <button onClick={()=> props.choosePerson('false')}>Descurtir</button>
       
        </>
    )

}

export default Header;