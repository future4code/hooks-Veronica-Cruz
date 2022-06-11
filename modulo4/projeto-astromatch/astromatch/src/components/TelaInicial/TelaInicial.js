import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../Header";

const TelaInicialCss = styled.div `{
    border-radius: 10%;
    box-shadow: 8px 5px 5px blue;
    border: 1px solid black;
    height: 110vh;
    width: 40vw;
    background-color: white;
    margin: auto;}
    
   
   
   button {
       display: inline-flex;
       justify-content: space-between;
       align-items: center;
       padding: 6px;
       margin: 8px;
       border-radius: 15px;
       box-shadow: 1px 1px 1px blue;
    }
   
       img{
       border-radius: 150px;
   }

   h1 {
       background-color: white;
       border-radius: 5em;
       height: 70px;
       margin-bottom: 10px;
       text-align: center;
       display: flex;
       align-items: center;
       justify-content: center;
       box-shadow: 1px 1px 1px black;
       margin-top: 0px;
   }
   
   `


const TelaInicialCard = () => {

    const[choosePerson, setChoosePerson] = useState('')

    const getChoosePerson =()=>{
        const headers = {
            Authorization: "veronica-silveira-hooks"
        }
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/veronica-silveira-hooks/person"
        axios.get(url, headers)
        .then((res)=>{
            return setChoosePerson(res.data.profile)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
        const ChoosePerson=(escolher)=>{
            const body={
                id:choosePerson.id,
                escolher:"true"
            }
            const url= "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/veronica-silveira-hooks/choose-person"
            const headers = {
                Authorization: "veronica-silveira-hooks"
            }
            axios.post (url,headers, body)
            .then((res)=>{
                getChoosePerson();
            })
            .catch((err)=>{
                console.log(err)
            })
        }

        useEffect(()=>{
            getChoosePerson();
        },[])
   

    return(
        <div className="TelaInicial">
            <div className="header-TelaInicial">
            
            <TelaInicialCss>
                <Header />
               
                <div><img src={choosePerson.photo} width="280" height="300"/></div>
                <div>{choosePerson.name}</div>
                <div className="bio">{choosePerson.bio} </div>
                
            </TelaInicialCss>
            </div>
            
        </div>
    )
}

export default TelaInicialCard;
