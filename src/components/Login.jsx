import React from 'react'
import styled from 'styled-components'

function Login() {
   const handleClick=()=>{
    const clientId = "33f873747def4de798d675b23c873d0f"
    const redirect_uri = 'http://localhost:3000/'
    const api_uri = 'https://accounts.spotify.com/authorize'
    const scope ='user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-playback-position user-top-read user-read-recently-played'
    window.location.href=`${api_uri}?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=token&show_dialog=true`   
}
  return (
    <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="spotify"/>
        <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  )
}
const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100vh;
width:100vw;
background-color:#1db954;
gap:5rem;
img{
height:20vh;
}
button{
    padding: 1rem 5rem;
    border-radius: 5rem;
    border:none;
    background-color:black;
    color: #49f585;
    font-size:1.4rem;
    cursor:pointer;
}`;
export default Login
