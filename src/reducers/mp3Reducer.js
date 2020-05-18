import {GET_MP3,GET_ERRORS,DELETE_MP3} from '../actions/types';
import initialState from './initialState'


export default function(state= initialState.mp3s,action)
{
  const {type,payload} = action;
  switch (type){
      case GET_MP3:
          return {
            ...state,
            mp3Records:payload,
            errors:[],
            status:false
          }
    
      case DELETE_MP3:
          return {
            ...state,
            ID:payload,
          }
    
      case GET_ERRORS:
          return {
            ...state,
            errors:payload,
            status:true

          }
    
      default:
          return state;
  }

}