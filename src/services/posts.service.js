import AxiosService from "./axios.service";

import {urls} from "../configs";

export const postsService = {
    getAll: () => AxiosService.get(urls.posts).then(value => value.data),
    getById: (id) => AxiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getComments: (id) => AxiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}