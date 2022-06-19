import styled from "styled-components";

const FormDaPlaylist = styled.form`
    display: flex;
    flex-direction: row;
    width: 800px;
    align-items: center;
    justify-content: space-between;

    button{
    background-color: blueviolet;
    color: white;
    border-radius: 10px;
    }

    h5{
        font-size: 15pt;
    }
`

const PlaylistCard = () => {
    return(
        
        <FormDaPlaylist>
             <button><b>Abrir Playlist</b></button>
             <h5>Nome da Playlist</h5>
             <button><b>Apagar Playlist</b></button>
         </FormDaPlaylist>
        
    )
};

export default PlaylistCard;