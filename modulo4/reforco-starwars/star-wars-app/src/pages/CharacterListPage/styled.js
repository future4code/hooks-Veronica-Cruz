import styled from "styled-components";

const CharacterCard = styled.div`
display: flex;
justify-content: center;
position: relative;
left: 320px;
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 550px;

h1{
    text-align: center ;}
&:hover{
    cursor: pointer;
    background-color: lightblue;
}



`

export default CharacterCard;