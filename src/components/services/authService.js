import  http from './httpService'
import config from '../../config'
const {apiUrl}=config;

export function login(username,password) {
   return  http.post(apiUrl+"api-token-auth/",{username,password})

}