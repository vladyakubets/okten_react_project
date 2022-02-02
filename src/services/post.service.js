import {axiosService} from "./axios.service";

import {urls} from "../configs";

export const postService = {
    getAll: ()=>axiosService.jphAxiosService.get(urls.posts).then(value => value.data)
}