import axiosClient from '../utils/configs';
import {GET_DASHBOARD} from './types'


export const url = `api/dashboard`;

export const getAnalytics = ()=> async dispatch => {
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      };    
    const res = await axiosClient.get(url,config);
    dispatch({
        type:GET_DASHBOARD,
        payload:res.data
    })
}
