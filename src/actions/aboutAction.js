import axiosClient from '../utils/configs';
import {GET_ABOUT,DELETE_ABOUT,GET_A_ABOUT} from './types'
import {asyncActionStart,asyncActionFinish} from '../async/AsyncActions'
import {toastr} from 'react-redux-toastr'
import {reactReduxToastrOptions} from '../utils/constants'


export const url = `api/aboutus`;

export const getAboutUs = ()=> async dispatch => {
    dispatch(asyncActionStart())
    const res = await axiosClient.get(url);
    dispatch({
        type:GET_ABOUT,
        payload:res.data.data
    })
    dispatch(asyncActionFinish())
}
export const reloadAboutUs = ()=> async dispatch => {
    const res = await axiosClient.get(url);
    dispatch({
        type:GET_ABOUT,
        payload:res.data.data
    })
}

export const getSingleAbout = (id)=> async dispatch=>{
    try{
        const res = await axiosClient.get(`${url}/${id}`)
        dispatch({
            type:GET_A_ABOUT,
            payload:res.data.data
        })
    }catch(err){
        console.log(err)
    }
}

export const createAboutUs = (data)=>{
    return axiosClient.post(url,data,{
            headers:{'content-type': 'application/json'}
    })
}

export const updateAboutUs=(id,data)=>{
    return axiosClient.put(`${url}/${id}`,data)
}


export const getRecord =(id)=>{
    return axiosClient.get(`${url}/${id}`)
}



export const deleteAboutUs = (id)=> async dispatch=>{ 
    if(
        window.confirm(
            "Are you sure? This will delete the record!"
          )
    ){
        const res = await axiosClient.delete(`${url}/${id}`,{
            headers:{
                'content-type':'application/json'
            }
        });
        dispatch({
            type:DELETE_ABOUT,
            payload:id
        })
        toastr.success('About Us', `${res.data.data}`,reactReduxToastrOptions("top-center"))
        dispatch(reloadAboutUs())

    }  
}




