import {axiosService} from "./axios.service";

import {urls} from "../configs";

export const userService = {
    getAll: ()=>axiosService.jphAxiosService.get(urls.users).then(value => value.data)
}