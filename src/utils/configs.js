import axios from 'axios'

// const host = "http://127.0.0.1"
// const port = 12000;
// export const baseURL = `${host}:${port}`

//-------------------------------------------production
const host = "https://soundinsights.herokuapp.com"
export const baseURL = `${host}`


const httpTimeout = '20000' 


const axiosClient = axios.create({
    baseURL: baseURL,
    timeout: httpTimeout,

  })
  

  export default axiosClient;