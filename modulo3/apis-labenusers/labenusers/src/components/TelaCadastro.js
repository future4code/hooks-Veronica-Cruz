import React from "react";
import axios from "axios";

export default class TelaCadastro extends React.Component{

    state = {
        nome: "",
        email:""
    }

    guardaNome = (event) => {
        this.setState({nome: event.target.value})
        console.log(this.state.nome)
    }

    guardaEmail = (event) => {
        this.setState({email: event.target.value})
        console.log(this.state.email)
}

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        const headers = {
            Authorization: "veronica-silveira-hooks"
        }
        axios.post(url, body, headers)
        .then((response) => {
            alert("Cadastro realizado com sucesso!")
            this.setState({nome: "", email:""})
        })
        .catch((error) => {
            alert("Ocorreu um erro!")
            this.setState({nome: "", email:""})
        })
    }

    render(){
        return(
            <div>
                
                <button onClick={this.props.listaUsuario}>Lista</button>
                <h1>Cadastro</h1>

                <input 
                placeholder="Nome" 
                value={this.state.nome} 
                onChange={this.guardaNome}>
                </input>

                <input 
                placeholder="E-mail" 
                value={this.state.email} 
                onChange={this.guardaEmail}>
                </input>

                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}