import axiosClient from '../utils/configs'


export const sendEmail = (data)=>{
        return axiosClient.post(`api/sendmail`,data,{
            headers:{
                'content-type':'application/json'
            }
        })
    }