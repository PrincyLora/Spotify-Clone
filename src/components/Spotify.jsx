import React from 'react'
import { useEffect } from 'react'
import styled  from 'styled-components'
import { useStateProvider } from '../utils/stateProvider'
import Body from './Body'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import axios from 'axios'
import { reducerCases } from '../utils/constants'
function Spotify() {
    const [{token},dispatch]=useStateProvider();
    useEffect(()=>{
        const getUserData = async()=>{
            const {data} = await axios.get("https://api.spotify.com/v1/me/",
            {headers:{
              Authorization:'Bearer '+token,
              "Content-Type": "application/json",
            },
          })
          
           const userInfo={
            userId: data.id,
            userName: data.display_name
           }
           console.log(userInfo)
           dispatch({type:reducerCases.SET_USER,userInfo})
  }
  getUserData()
    },[token,dispatch])
  return (
    <Container>
        <div className='spotify__body'>
            <Sidebar/>
            <div className='body'>
                <Navbar/>
                <div className="body__contents">
                <Body/>
                </div>
            </div>
        </div>
            <div className="spotify__footwear">
                <Footer/>
            </div>
  
    </Container>
  )
}
const Container = styled.div`
max-width:100vw;
max-height:100vh;
overflow:hidden;
display:grid;
grid-template-rows:85vh 15vh;
.spotify__body{
    display:grid;
    grid-template-columns:15vw 85vw;
    width:100%;
    height:100%;
    background:linear-gradient(transparent,rgba(0,0,0,1));
    background-color:rgb(32,87,100)
}
`
export default Spotify
