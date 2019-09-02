import * as Config from './config'
import { getData, postData, deleteData, putData } from './request'

export const register = body => postData(`${Config.host}register`, body)
export const login = body => postData(`${Config.host}login`, body)
export const auth = body => postData(`${Config.host}auth`, body)
