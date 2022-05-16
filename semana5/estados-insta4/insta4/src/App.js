import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import SegundoPost from './components/Post/SegundoPost'
import TerceiroPost from './components/Post/TerceiroPost'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <SegundoPost
          nomeUsuario ={'bruna'}
          fotoUsuario={'https://img.elo7.com.br/product/zoom/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg'}
          fotoPost={'https://img.elo7.com.br/product/original/3249FFD/quadro-decorativo-natureza-paisagem-mar-sol-coqueiro-ponte-quadro-belezas-naturais.jpg'}
        />

        <TerceiroPost
          nomeUsuario ={'sérgio'}
          fotoUsuario={'https://img.freepik.com/vetores-gratis/homem-perfil-caricatura_18591-58482.jpg?w=2000'}
          fotoPost={'https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
