import React from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaUsuario from "./components/TelaUsuarios";


class App extends React.Component{

  state = {
    telaAtual: "lista"
  }
  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro listaUsuario={this.listaUsuario}/>
      case "lista":
        return <TelaUsuario cadastrarUsuario={this.cadastrarUsuario}/>
         
      default:
        return <p>Página não encontrada!</p>;
    }
  }

  cadastrarUsuario = () => {
    this.setState({telaAtual: "cadastro"})
  }

  listaUsuario = () => {
    this.setState({telaAtual: "lista"})
  }


    render(){
  return (
      <div className="App">

        {this.escolherTela()} 

       
        
      </div>
    );
  }
  }



export default App;
