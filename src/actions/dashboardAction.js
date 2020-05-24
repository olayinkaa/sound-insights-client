import axiosClient from '../utils/configs';
import {GET_DASHBOARD} from './types'


export const url = `api/dashboard`;

export const getAnalytics = ()=> async dispatch => {
    const res = await axiosClient.get(url);
    dispatch({
        type:GET_DASHBOARD,
        payload:res.data
    })
}
