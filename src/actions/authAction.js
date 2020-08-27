import axiosClient from '../utils/configs'
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';
import setAuthToken from '../utils/setAuthToken';
import {toastr} from 'react-redux-toastr'
import {reactReduxToastrOptions} from '../utils/constants'
import jwt_decode from 'jwt-decode';


// Register User
export const register = (body,history) => async dispatch => {
  const url = `/api/register`
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axiosClient.post(url, body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.data
    });

    history.push('/login')
    toastr.success('Registration', `${res.data.message}`,reactReduxToastrOptions("top-right"))

  } catch (err) {
    const errors = err.response.data.errors;

    let arr = [];
    errors!==null&&errors!==undefined&&Object.values(errors).forEach((value) => (
      arr.push(value)
    ));


    arr.length>0&&arr!==null&&arr!==undefined&&arr.map((item, i) => (
        dispatch(setAlert(item,'danger'))
    ))


  }

};

// Login User
export const login = (body) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axiosClient.post('/api/login', body, config);
    const {access_token} = res.data.data
    localStorage.setItem("jwt_token",access_token)
    setAuthToken(access_token)
    const decoded_token = jwt_decode(access_token)
    console.log(decoded_token)
    if(decoded_token.scopes!==null&&decoded_token.scopes!==undefined&&decoded_token.length>0){
        localStorage.setItem('user_scopes',JSON.stringify(decoded_token.scopes))
    }
    dispatch({
      type: LOGIN_SUCCESS,
      payload:{decoded_token}
    });

  } catch (err) {
      
    if(err.response)
    {
        const {error} = err.response.data.errors;
        if(error){
            dispatch(setAlert(error,'danger'))
        }
        dispatch({
            type: LOGIN_FAIL
          });
      
    }
 
  }
};


// Logout / Clear Profile
// export const logout = () => dispatch => {
//   dispatch({ type: CLEAR_PROFILE });
//   dispatch({ type: LOGOUT });
// };

export const logout = ()=> dispatch => {
    localStorage.removeItem("jwt_token")
    setAuthToken(false)
    dispatch({
        type:LOGOUT
    })
}
