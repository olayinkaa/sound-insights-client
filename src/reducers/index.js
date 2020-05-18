import {combineReducers} from 'redux';
import mp3Reducer from './mp3Reducer'
import aboutReducer from './aboutReducer'
import AsyncReducer from '../async/AsyncReducers'
import {reducer as ToastrReducer} from 'react-redux-toastr'

export default combineReducers ({
    aboutReducer,
    AsyncReducer,
    mp3Reducer,
    toastr:ToastrReducer,   
});