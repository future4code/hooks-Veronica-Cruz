import styled from "styled-components";

const TrackContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   

`
const TrackNameContainer = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid;
    width: 300px;
    height: 50px;
    background-color: #FFC0CB;
    color: black;
    border-radius: 10px;
    box-shadow: 2px 2px 2px deeppink;
`
       

const TrackCard = (props) => {
  
  return (
    <div>
      <TrackContainer>
        <audio controls src={props.track.url}/>
        <TrackNameContainer>{props.track.name} - {props.track.artist}</TrackNameContainer>
     
        <button onClick={()=>props.removeTrackFromPlaylist(props.track.id)}>Delete</button>
      </TrackContainer>
    </div>
  );
};

export default TrackCard;
