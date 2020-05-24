import {GET_DASHBOARD} from '../actions/types';
import initialState from './initialState'


export default function(state= initialState.Dashboard,action)
{
  switch (action.type)
  {
      case GET_DASHBOARD:
          return {
            ...state,
            analytics:action.payload,
          }
   
      default:
          return state;
  }

}