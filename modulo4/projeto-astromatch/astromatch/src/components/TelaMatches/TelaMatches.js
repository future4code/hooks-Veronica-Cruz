// - 3. Possibilidade de Resetar
    
//     O usuário da nossa aplicação pode limpar as informações dos matches que deram a qualquer momento em qualquer tela do site. Para isso, adicione um botão que fique bem claro que faz isso (com uma mensagem ou um ícone pertinente)
    
//     Nessa tela, você vai usar o endpoint: *Clear (limpar)*

import React, {useState, useEffect} from "react";
import axios from "axios";

const TelaDeMatches = () => {
    return(
        <div>
            <h2>Você deu Match com...</h2>
            <button className="buttonMatches">Ver Matches</button>
        </div>
    )
}

export default TelaDeMatches