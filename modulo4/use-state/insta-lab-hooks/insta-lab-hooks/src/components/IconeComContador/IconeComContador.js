import React from 'react'
import styled from "styled-components"

const IconeContainer = styled.div`
	display: flex;

	img {
		margin-right: 5px;
	}
`

function IconeComContador(props) {
	return <IconeContainer>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
		<p>{props.iconeCurtida}</p>
		<p>{props.numeroCurtidas}</p>
		<p>{props.numeroComentarios}</p>
	</IconeContainer>
}

export default IconeComContador