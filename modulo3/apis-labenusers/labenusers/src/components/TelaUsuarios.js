import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div `
    border: 1px solid black;
    color: white;
    background-color: blue;
    display: flex;
    justify-content: space-between;
`

export default class TelaUsuario extends React.Component{

    state = {
        listaDeUsuarios: []
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const headers = {
            Authorization: "veronica-silveira-hooks"
        }
        axios.get(url, headers)
        .then((response) => {
            this.setState({listaDeUsuarios: response.data})
        })
        .catch((error) => {
            alert("Ops! Ocorreu um erro!")
        })
    }

    componentDidMount (){
        this.pegarUsuarios()
    }


    render(){

        const usuarios = this.state.listaDeUsuarios.map((usuario) =>{
            <CardUsuario>
                {usuario.name}
                <button>Excluir</button>
            </CardUsuario>
        }) 

        
        return(
            <div>
                <h1>Lista de Usuários</h1>
                <button onClick={this.props.cadastrarUsuario}>Cadastrar</button>
               
            </div>
        )
    }
}