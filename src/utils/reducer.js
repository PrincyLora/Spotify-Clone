//initialise state

import { reducerCases } from "./constants"

export const initialState ={
    token: null,
    playlists: [],
    userInfo:null,
    selectedPlayListId: '1bkKAikNoynxJmrZz1onyS',
    selectedPlaylist:null,
    currentPlaying:null,
    playerState:false
}

const reducer =(state,action)=>{
    console.log(state)
    console.log(action)
    switch(action.type){
        case reducerCases.SET_TOKEN:{
            return {
                ...state,
                token: action.token
            }
        }
        case reducerCases.SET_PLAYLISTS:{
            return {
                ...state,
                playlists: action.playlists
            }
        }
        case reducerCases.SET_USER:{
            return {
                ...state,
                userInfo:action.userInfo
            }
        }
        case reducerCases.SET_PLAYLIST:{
            return {
                ...state,
                selectedPlaylist:action.selectedPlaylist
            }
        }
        case reducerCases.SET_PLAYING:{
            return {
                ...state,
                currentPlaying:action.currentPlaying
            }
        }
        case reducerCases.SET_PLAYER_STATE:{
            debugger
            console.log("pp"+ action.playerState)
            return {
                ...state,
                playerState:action.playerState
            }
        }
        case reducerCases.SET_PLAYLIST_ID:{
            debugger
            console.log("here reducer")
            console.log(action.selectedPlayListId)
            return {
                ...state,
                selectedPlayListId:action.selectedPlayListId
            }
        }
        default:
            return state
    }
}
export default reducer