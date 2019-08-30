import * as Config from './config'
import { getData, postData, deleteData, putData } from './request'

console.log(Config)
export const register = body => postData(`${Config.host}register`, body)