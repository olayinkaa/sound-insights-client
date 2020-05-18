import {ASYNC_ACTION_START,ASYNC_ACTION_FINISH,ASYNC_ACTION_ERROR} from './AsyncConstants'
import {createReducer} from './ReducerUtils'


const initialState = {

    isLoading:false
}


const asyncActionStarted = (state)=>{
    return {

        ...state,
        isLoading:true
    }
}

const asyncActionFinished = (state)=>{
    return {

        ...state,
        isLoading:false
    }
}

const asyncActionError = (state)=>{
    return {

        ...state,
        isLoading:false
    }
}

export default createReducer(initialState,{
    [ASYNC_ACTION_START]:asyncActionStarted,
    [ASYNC_ACTION_FINISH]:asyncActionFinished,
    [ASYNC_ACTION_ERROR]:asyncActionError,
})




