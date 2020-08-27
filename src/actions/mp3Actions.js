import axiosClient,{baseURL} from '../utils/configs';
import {GET_MP3,GET_ERRORS,DELETE_MP3} from './types'
import {asyncActionStart,asyncActionFinish} from '../async/AsyncActions'
import {toastr} from 'react-redux-toastr'
import {reactReduxToastrOptions} from '../utils/constants'
import axios from 'axios'

const url = `api/mp3`

export const getMp3 = ()=> async dispatch => {
    dispatch(asyncActionStart())
    const res = await axiosClient.get(url);
    dispatch({
        type:GET_MP3,
        payload:res.data.data
    })
    dispatch(asyncActionFinish())
}

export const reloadMp3 = ()=> async dispatch => {
    const res = await axiosClient.get(url);
    dispatch({
        type:GET_MP3,
        payload:res.data.data
    })
}

export const createNewMP3 = (data)=>{

    return axiosClient.post(url,data,{
        headers:{'content-type': 'multipart/form-data'}
    })
}

export const postMp3 = (data,history)=> async dispatch=> {

    try
    {
        const res = await axiosClient.post(url,data,{
            headers:{
                'content-type': 'multipart/form-data',
              }
        })
        toastr.success('Mp3 Song',`${res.data.message}`,reactReduxToastrOptions());
        history.push('/admin/mp3')
        dispatch(reloadMp3())
    }
    catch(err)
    {
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data.errors
        })
        toastr.error('Error', `${err.response.data.message}`,reactReduxToastrOptions("top-center"))
    }
}

export const deleteMp3 = (id)=> async dispatch=>{ 
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
            type:DELETE_MP3,
            payload:id
        })
        toastr.success('Mp3', `${res.data.data}`,reactReduxToastrOptions("top-center"))
        dispatch(reloadMp3())
    }  
}


// export const downloadFile =(id)=>{
//     return axiosClient.get(`${url}/download/${id}`,'blob',{
//         responseType:'blob'
//     }).then((response) => {
//         const url = window.URL.createObjectURL(new Blob([response.data]));
//         const link = document.createElement('a');
//         link.href = url;
//         link.setAttribute('download', 'soundinsights.mp3');
//         document.body.appendChild(link);
//         link.click();
//       });
// }


export const downloadFile =(id)=>{
    axios({
        url: `${baseURL}/${url}/download/${id}`,
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'soundinsights.mp3');
        document.body.appendChild(link);
        link.click();
      });

}

