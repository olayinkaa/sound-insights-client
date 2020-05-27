import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    // ACCOUNT_DELETED
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('jwt_token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    tokenExpires:null,
    scopes:[],
    errors:{}
  };
  const checkTokenExist = (payload)=>{
      if(payload){
          return true
      } else {
          return false
      }
  }
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
            ...state,
            user:payload,
            loading: false
          };
      case LOGIN_SUCCESS:
        return {
          ...state,
          scopes:payload.decoded_token.scopes,
          tokenExpires:payload.decoded_token.exp,
          isAuthenticated:checkTokenExist(payload),
          loading: false
        };
      case REGISTER_FAIL:
          localStorage.removeItem('jwt_token');
          return {
            ...state,
            errors:payload,
            loading:false

          }
    
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem('jwt_token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false
        };
      default:
        return state;
    }
  }
  