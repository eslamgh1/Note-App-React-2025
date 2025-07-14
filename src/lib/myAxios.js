import axios from "axios"

export const myAxios = axios.create(
{
    baseURL : 'https://note-sigma-black.vercel.app/api/v1',
}
)

myAxios.interceptors.request.use((req)=>{
req.headers.token = `3b8ny__${localStorage.getItem("token")}`

return req
}
)