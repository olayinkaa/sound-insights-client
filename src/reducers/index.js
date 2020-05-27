import {combineReducers} from 'redux';
import mp3Reducer from './mp3Reducer'
import aboutReducer from './aboutReducer'
import AsyncReducer from '../async/AsyncReducers'
import dashboardReducer from './dashboardReducer'
import authReducer from './authReducer'
import alert from './alert'
import {reducer as ToastrReducer} from 'react-redux-toastr'

export default combineReducers ({
    aboutReducer,
    dashboardReducer,
    AsyncReducer,
    authReducer,
    alert,
    mp3Reducer,
    toastr:ToastrReducer,   
});