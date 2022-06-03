import React, {useState, useEffect} from "react";
import axios from "axios";
import './TelaInicial.css';

const TelaInicialCard = () => {
    return(
        <div className="TelaInicial">
            <div className="header-TelaInicial">
            <h4>Nome</h4>
            <button className="curtirPerfil">Curtir</button>
            <button className="descurtirPerfil">Descurtir</button>
            </div>
            
        </div>
    )
}

export default TelaInicialCard;
