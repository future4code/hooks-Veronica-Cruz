import styled from "styled-components";


const PlaylistCardContainer = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    border: 1px solid;
    width: 300px;
    height: 50px;
    background-color: blueviolet;
    color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 2px deeppink;

        
`

const FormDaPlaylist = styled.form`
    display: flex;
    flex-direction: row;
    width: 800px;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    button{
    background-color: blueviolet;
    color: white;
    border-radius: 10px;
    border: none;
    padding: 10px;
    box-shadow: 2px 2px 2px deeppink;
}

    h5{
        font-size: 15pt;
    }
   
`

const PlaylistCard = (props) => {
    return(
        
        <FormDaPlaylist>
             <button onClick={()=> props.showPage('playlistDetails', props.playlistId)}><b>Ver Playlist</b></button>
             <PlaylistCardContainer >{props.playlistName}</PlaylistCardContainer>
             <button onClick={() => props.deletePlaylist(props.playlistId)}><b>Apagar Playlist</b></button>
         </FormDaPlaylist>
        
    )
};

export default PlaylistCard;