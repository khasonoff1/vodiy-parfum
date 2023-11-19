import axios from "axios"

const request = axios.create({
    baseURL: `https://vodiy-parfum-backend.vercel.app/api/v1/`,
    timeout: 30000
})

request.interceptors.response.use(res => res, (err) => {
    return Promise.reject(err);
})

export default request;