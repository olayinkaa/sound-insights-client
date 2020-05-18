import {GET_ABOUT,DELETE_ABOUT,GET_A_ABOUT} from '../actions/types';
import initialState from './initialState'


export default function(state= initialState.Aboutus,action)
{
  switch (action.type){
      case GET_ABOUT:
          return {
            ...state,
            aboutus:action.payload,
          }

      case DELETE_ABOUT:
          return {
            ...state,
            id:action.payload,
          }
      case GET_A_ABOUT:
          return {
            ...state,
            aboutContent:action.payload
          }
   
      default:
          return state;
  }

}