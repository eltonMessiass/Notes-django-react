// vai funcionar como um interceptador, toda vez que é feita uma requisiçao será validado se tem o token de acesso

import axios from "axios"
import { ACCESS_TOKEN } from "./constants"


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL //importa tudo que está especificado dentro do enviroment variable file e é necessario que inicie por VITE
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (token) {
            config.headers.Authorization = `Bearer ${token}` //this is how jwt token is passed
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)


export default api