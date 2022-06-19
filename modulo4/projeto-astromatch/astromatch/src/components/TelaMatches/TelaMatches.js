import React, {useState, useEffect} from "react";
import axios from "axios";

const TelaDeMatches = (props) => {
    return(
        <div>
            <h2>Você deu Match com...</h2>
            <button onClick={()=> props.changePage('escolherPessoas')}>Back</button>
        </div>
    )
}

export default TelaDeMatches