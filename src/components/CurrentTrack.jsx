import axios from 'axios';
import React,{useEffect} from 'react'
import styled  from 'styled-components'
import { useStateProvider } from '../utils/stateProvider';
import { reducerCases } from '../utils/constants'

function CurrentTrack() {
    const [{token,currentPlaying},dispatch]=useStateProvider();
    useEffect(()=>{
        const getCurrentTrack = async()=>{
            debugger
                  const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing",
                  {headers:{
                    Authorization:'Bearer '+token,
                    "Content-Type": "application/json",
                  },
                })
                 console.log(response)
                 if(response.data !== ""){
                    const {item}= response.data;
                    const currentPlaying = {
                        id:item.id,
                        name:item.name,
                        // eslint-disable-next-line no-unused-expressions
                        artists:item.artists.map((a)=>a.name),
                        image:item.album.images[2].url
                    }
                 
                        dispatch({type:reducerCases.SET_PLAYING, currentPlaying})
                }
        }
        getCurrentTrack()

    },[token,dispatch])
  return (
    <Container>{
        currentPlaying && (
            <div className="track">
                <div className="track__image">
                    <img src={currentPlaying.image} alt="currently playing"/>
                </div>
                <div className="track__info">
                    <h4>{currentPlaying.name}</h4>
                    <h6>{currentPlaying.artists.join(", ")}</h6>
                </div>
            </div>
        )}</Container>
  )
}

const Container = styled.div`
.track{
    display: flex;
    align-items:center;
    gap:1rem;
    &__info{
        display:flex;
        flex-direction:column;
        gap:0.3rem;
        h4{
            color:white;
        }
        h6{
            
        }
    }
}
`

export default CurrentTrack
